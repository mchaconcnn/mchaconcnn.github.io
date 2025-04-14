import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000); // Increase far clipping plane
camera.position.z = 0;  
camera.layers.enable( 0 ); // enabled by default

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing for better visual quality
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Optimize for high-resolution displays
renderer.outputEncoding = THREE.SRGBColorSpace; // Improve color accuracy
document.body.appendChild(renderer.domElement);

// Load an equirectangular EXR panorama and display it inside a large sphere
const exrLoader = new EXRLoader();
exrLoader.load('vr/day/TBEXR/0000_L.exr', (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.LinearSRGBColorSpace; // keep linear EXR data
    const sphereGeo = new THREE.SphereGeometry(500, 60, 40);
    const sphereMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    const panorama = new THREE.Mesh(sphereGeo, sphereMat);
    panorama.layers.set(1); // only visible on layer 1 (left eye)
    scene.add(panorama);
});

// Load the right‑eye panorama on layer 2
exrLoader.load('vr/day/TBEXR/0000_R.exr', (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.LinearSRGBColorSpace;
    const sphereGeo = new THREE.SphereGeometry(500, 60, 40);
    const sphereMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    const panoramaRight = new THREE.Mesh(sphereGeo, sphereMat);
    panoramaRight.layers.set(2); // visible only in layer 2 (right eye)
    scene.add(panoramaRight);
});

// Add lighting for better visuals
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// Add WebXR support
renderer.xr.enabled = true;
document.body.appendChild(VRButton.createButton(renderer));

// Configure per‑eye layers: layer 1 → left eye, layer 2 → right eye
renderer.xr.addEventListener('sessionstart', () => {
    const xrCamera = renderer.xr.getCamera(camera); // THREE.ArrayCamera
    if (xrCamera && xrCamera.cameras && xrCamera.cameras.length >= 2) {
        const [leftCam, rightCam] = xrCamera.cameras; // 0 = left, 1 = right
        leftCam.layers.set(1);   // render ONLY layer 1
        rightCam.layers.set(2);  // render ONLY layer 2
    }
});

// Handle window resize for better VR experience
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}

animate();