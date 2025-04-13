// Import necessary modules for WebXR and Three.js
import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);
document.body.appendChild(VRButton.createButton(renderer));

// Add an equirectangular environment texture
const textureLoader = new THREE.TextureLoader();

// Load two separate images for left and right views
const leftTexture = textureLoader.load('vr/standard/left.jpg', (texture) => {
    console.log('Left texture loaded successfully:', texture);
});
const rightTexture = textureLoader.load('vr/standard/right.jpg', (texture) => {
    console.log('Right texture loaded successfully:', texture);
});

// Adjust UV mapping for left-right stereoscopic images
Promise.all([leftTexture, rightTexture]).then(([left, right]) => {
    console.log('Left texture:', left);
    console.log('Right texture:', right);

    const stereoMaterial = new THREE.ShaderMaterial({
        uniforms: {
            leftMap: { value: left },
            rightMap: { value: right },
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D leftMap;
            uniform sampler2D rightMap;
            varying vec2 vUv;
            void main() {
                vec2 uv = vUv;
                if (uv.x > 0.5) {
                    uv.x = (uv.x - 0.5) * 2.0; // Right half
                    gl_FragColor = texture2D(rightMap, uv);
                } else {
                    uv.x = uv.x * 2.0; // Left half
                    gl_FragColor = texture2D(leftMap, uv);
                }
            }
        `,
    });

    console.log('Stereo material created:', stereoMaterial);

    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(500, 60, 40),
        stereoMaterial
    );
    sphere.scale.x = -1; // Invert the sphere to view from inside
    scene.add(sphere);

    console.log('Sphere added to scene:', sphere);
}).catch((error) => {
    console.error('Error loading textures:', error);
});

// Position the camera
camera.position.set(0, 1.6, 3);

// Animation loop
function animate() {
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}

animate();