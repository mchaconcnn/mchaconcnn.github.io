import * as THREE from '../three/build/three.module.js'; // Update import to use the local file
import { VRButton } from '../three/examples/jsm/webxr/VRButton.js'; // Update VRButton import to use the local file
import { EXRLoader } from '../three/examples/jsm/loaders/EXRLoader.js'; // Update EXRLoader import to use the local file
import { OrbitControls } from '../three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls

// ----- CONFIG -----
const sphereRadius = 3;   // Full‑size sphere so camera starts at its exact center
// const parallaxFactor = 3.0; // Stronger inverse motion (1 = match head movement)
// -------------------

// Create a scene
const scene = new THREE.Scene();
let panoramaLeft, panoramaRight; // will hold the two sphere meshes
let initialHeadPos = null; // captured at session start
let baseOffset = null; // offset to recenter spheres so camera starts at sphere center
let xcamInit=false;
window.xc=function(){return xcamInit;}


// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000); // Increase far clipping plane

// camera.position.z = 0;  
camera.layers.enable( 0 ); // enabled by default

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing for better visual quality
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Optimize for high-resolution displays
renderer.outputEncoding = THREE.SRGBColorSpace; // Improve color accuracy
// renderer.toneMapping = THREE.ACESFilmicToneMapping; // Use a more accurate tone mapping
// renderer.toneMappingExposure = 1;
window.renderer=renderer;

document.body.appendChild(renderer.domElement);

// Orbit controls (active only when not in XR)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = true;
controls.minDistance = 0.1;
controls.maxDistance = 10;

// Point the camera toward negative Z so the horizon is centered
camera.lookAt(new THREE.Vector3(0, 0, -1));
controls.target.set(1, 0, 0);
controls.update();

// Load an equirectangular EXR panorama and display it inside a large sphere
const exrLoader = new EXRLoader();
const textureLoader = new THREE.TextureLoader();

// exrLoader.load('vr/day/TBEXR/0001_L.exr', (texture) => {
textureLoader.load('vr/day/A/0001_L.jpg', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
    // texture.colorSpace = THREE.LinearSRGBColorSpace; // keep linear EXR data
    texture.colorSpace = THREE.SRGBColorSpace; // keep linear EXR data
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = -1;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 60, 40);
    const sphereMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    panoramaLeft = new THREE.Mesh(sphereGeo, sphereMat);
    // Make it visible in both the default layer 0 (for non‑XR preview)
    // and layer 1 (for the left eye once XR starts)
    panoramaLeft.layers.set(1);      // left‑eye layer
    panoramaLeft.layers.enable(0);   // also show on default layer
    scene.add(panoramaLeft);
    window.panoramaLeft=panoramaLeft;
});

// Load the right‑eye panorama on layer 2
textureLoader.load('vr/day/A/0001_R.jpg', (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = -1;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 60, 40);
    const sphereMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    panoramaRight = new THREE.Mesh(sphereGeo, sphereMat);
    panoramaRight.layers.set(2); // visible only in layer 2 (right eye)
    scene.add(panoramaRight);
});

// Add lighting for better visuals
// const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
// scene.add(light);

// Add WebXR support
renderer.xr.enabled = true;
document.body.appendChild(VRButton.createButton(renderer));

// Configure per‑eye layers: layer 1 → left eye, layer 2 → right eye
renderer.xr.addEventListener('sessionstart', () => {
    xcamInit=0;
    const xrCamera = renderer.xr.getCamera(camera); // THREE.ArrayCamera
    if (xrCamera && xrCamera.cameras && xrCamera.cameras.length >= 2) {
        const [leftCam, rightCam] = xrCamera.cameras; // 0 = left, 1 = right
        leftCam.layers.set(1);   // render ONLY layer 1
        rightCam.layers.set(2);  // render ONLY layer 2



        // Record the starting head/world position so we can measure deltas
        initialHeadPos = new THREE.Vector3();
        xrCamera.getWorldPosition(initialHeadPos);
        
        // Move both spheres so their centers coincide with the headset's initial position
        if (panoramaLeft)  panoramaLeft.position.copy(initialHeadPos);
        if (panoramaRight) panoramaRight.position.copy(initialHeadPos);
        
        // Calculate offset so that the sphere's center aligns with the initial head position
        baseOffset = initialHeadPos.clone().multiplyScalar(-1);
        controls.enabled = false; // disable OrbitControls in VR
        }
    
});

renderer.xr.addEventListener('sessionend', () => {
    // Re‑center view for desktop preview
    camera.position.set(0, 0, 0);
    camera.quaternion.set(0, 0, 0, 1);
    controls.target.set(0, 0, -1);
    panoramaLeft.position.set(0,0,0);
    panoramaRight.position.set(0,0,0);
    controls.update();
    
    controls.enabled = true; // re‑enable OrbitControls when exiting VR
});

// Helper to obtain the XR headset world position in any runtime
function getHeadWorldPosition() {
    const xrCam = renderer.xr.getCamera(camera);
    if (!xrCam) return null;
    xrCam.updateMatrixWorld(true);
    // For ArrayCamera we can read its matrixWorld (centre pose)
    const pos = new THREE.Vector3();
    pos.setFromMatrixPosition(xrCam.matrixWorld);
    return pos;
}

// Handle window resize for better VR experience
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    renderer.setAnimationLoop(() => {
        // Obtain headset position (works on Quest & emulator)
        const headPos = getHeadWorldPosition();

        if(xcamInit===0){
            xcamInit=true;
            panoramaLeft.position.copy(headPos);
            panoramaRight.position.copy(headPos);
        }


        // window.xcamInit=headPos;
        // if (headPos) {
            // if (!initialHeadPos) initialHeadPos = headPos.clone(); // capture on first valid frame
            // const delta = headPos.clone().sub(initialHeadPos).multiplyScalar(-parallaxFactor);
            // const finalPos = baseOffset ? baseOffset.clone().add(delta) : delta;
            // if (panoramaLeft){
                // panoramaLeft.position.copy(finalPos);
            // }  
            // if (panoramaRight){
                // panoramaRight.position.copy(finalPos);
            // }
        // }

        if (!renderer.xr.isPresenting) {
            controls.update(); // only update OrbitControls when not in XR
        }

        renderer.render(scene, camera);
    });
}

animate();


