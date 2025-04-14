// Import necessary modules for WebXR and Three.js
import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
renderer.xr.setFramebufferScaleFactor(2.0); // Optimize for Quest 3 by increasing framebuffer scale for better resolution
renderer.toneMapping = THREE.ACESFilmicToneMapping; // Use ACES Filmic tone mapping for better color grading
renderer.outputEncoding = THREE.SRGBColorSpace; // Ensure proper color encoding for Quest 3 display
document.body.appendChild(renderer.domElement);
document.body.appendChild(VRButton.createButton(renderer));

// Add an equirectangular environment texture
const exrLoader = new EXRLoader();

const leftTexture = exrLoader.load('vr/day/TBEXR/0000_L.exr', (texture) => {
    console.log('Left EXR texture loaded successfully:', texture);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    renderer.xr.setFramebufferScaleFactor(1.0); // Ensure proper scaling for XR rendering
});

const rightTexture = exrLoader.load('vr/day/TBEXR/0000_R.exr', (texture) => {
    console.log('Right EXR texture loaded successfully:', texture);
    texture.mapping = THREE.EquirectangularReflectionMapping;
});

const leftSphere = new THREE.Mesh(
    new THREE.SphereGeometry(500, 60, 40),
    new THREE.MeshBasicMaterial({ map: leftTexture })
);
leftSphere.scale.x = -1; // Invert the sphere to view from inside
scene.add(leftSphere);

const rightSphere = new THREE.Mesh(
    new THREE.SphereGeometry(500, 60, 40),
    new THREE.MeshBasicMaterial({ map: rightTexture })
);
rightSphere.scale.x = -1; // Invert the sphere to view from inside
scene.add(rightSphere);

// Assign custom layers so we can render each sphere to a specific eye
leftSphere.layers.set(1);   // Layer 1 -> left eye
rightSphere.layers.set(2);  // Layer 2 -> right eye

// Position the camera
camera.position.set(0, 1.6, 3);
camera.layers.enable(1);

// Animation loop
renderer.setAnimationLoop(() => {
    const session = renderer.xr.getSession();
    if (session) {
        const pose = session.inputSources[0]?.targetRaySpace;
        if (pose) {
            leftSphere.visible = true;
            rightSphere.visible = true;
        }
    }
    
    // Ensure each eye camera only sees its corresponding layer
    const xrCamera = renderer.xr.getCamera(camera);
    if (xrCamera && xrCamera.cameras && xrCamera.cameras.length === 2) {
        const [leftCam, rightCam] = xrCamera.cameras;
        // Force each eye camera to render ONLY its assigned layer
        leftCam.layers.set(1);   // left eye -> layer 1
        rightCam.layers.set(2);  // right eye -> layer 2
    }

    renderer.render(scene, camera);
});