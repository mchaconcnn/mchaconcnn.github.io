import * as THREE from "../three/build/three.module.js"; // Update import to use the local file
import { VRButton } from "../three/examples/jsm/webxr/VRButton.js"; // Update VRButton import to use the local file
// import { EXRLoader } from '../three/examples/jsm/loaders/EXRLoader.js'; // Update EXRLoader import to use the local file
import { OrbitControls } from "../three/examples/jsm/controls/OrbitControls.js"; // Import OrbitControls
import { XRControllerModelFactory } from "../three/examples/jsm/webxr/XRControllerModelFactory.js";
import { XRHandModelFactory } from "../three/examples/jsm/webxr/XRHandModelFactory.js"; // Update to use XRHandModelFactory
const vrMap = require("./vr.json").map;

// ----- CONFIG -----
const sphereRadius = 20; // Full‑size sphere so camera starts at its exact center

// const parallaxFactor = 3.0; // Stronger inverse motion (1 = match head movement)
// -------------------

let pointer = [];
// window.pointer=function(){return pointer;}

// Create a scene
const scene = new THREE.Scene();
let panoramaLeft, panoramaRight; // will hold the two sphere meshes
let initialHeadPos = null; // captured at session start
let baseOffset = null; // offset to recenter spheres so camera starts at sphere center
let xcamInit = false;
// window.xc=function(){return xcamInit;}

const mapObject = new THREE.Group();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000); // Increase far clipping plane

// camera.position.z = 0;
camera.layers.enable(0); // enabled by default

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing for better visual quality
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Optimize for high-resolution displays
renderer.outputEncoding = THREE.SRGBColorSpace; // Improve color accuracy
// renderer.toneMapping = THREE.ACESFilmicToneMapping; // Use a more accurate tone mapping
// renderer.toneMappingExposure = 1;
// window.renderer=renderer;

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

const textureLoader = new THREE.TextureLoader();

const sphereGeoL = new THREE.SphereGeometry(sphereRadius, 60, 40);
const sphereMatL = new THREE.MeshBasicMaterial({ side: THREE.BackSide });
panoramaLeft = new THREE.Mesh(sphereGeoL, sphereMatL);
panoramaLeft.layers.set(1); // left‑eye layer
panoramaLeft.layers.enable(0); // also show on default layer
scene.add(panoramaLeft);

const sphereGeoR = new THREE.SphereGeometry(sphereRadius, 60, 40);
const sphereMatR = new THREE.MeshBasicMaterial({ side: THREE.BackSide });
panoramaRight = new THREE.Mesh(sphereGeoR, sphereMatR);
panoramaRight.layers.set(2); // visible only in layer 2 (right eye)
scene.add(panoramaRight);

// Add lighting to illuminate the scene and controllers
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 10, 10).normalize();
scene.add(directionalLight);

// Add WebXR support
renderer.xr.enabled = true;
document.body.appendChild(
	VRButton.createButton(renderer, {
		requiredFeatures: ["hand-tracking"],
	})
);

// Configure per‑eye layers: layer 1 → left eye, layer 2 → right eye
renderer.xr.addEventListener("sessionstart", () => {
	xcamInit = 0;
	const xrCamera = renderer.xr.getCamera(camera); // THREE.ArrayCamera
	if (xrCamera && xrCamera.cameras && xrCamera.cameras.length >= 2) {
		const [leftCam, rightCam] = xrCamera.cameras; // 0 = left, 1 = right
		leftCam.layers.set(1); // render ONLY layer 1
		rightCam.layers.set(2); // render ONLY layer 2

		// Record the starting head/world position so we can measure deltas
		initialHeadPos = new THREE.Vector3();
		xrCamera.getWorldPosition(initialHeadPos);

		// Move both spheres so their centers coincide with the headset's initial position
		if (panoramaLeft) panoramaLeft.position.copy(initialHeadPos);
		if (panoramaRight) panoramaRight.position.copy(initialHeadPos);

		// Calculate offset so that the sphere's center aligns with the initial head position
		baseOffset = initialHeadPos.clone().multiplyScalar(-1);
		controls.enabled = false; // disable OrbitControls in VR
	}
});

// Ensure hand tracking is enabled in the XR session
renderer.xr.addEventListener("sessionstart", (event) => {
	const session = event.target.getSession();
	if (session) {
		session.updateRenderState({ baseLayer: new XRWebGLLayer(session, renderer.getContext()) });
		session.requestReferenceSpace("local").then((refSpace) => {
			renderer.xr.setReferenceSpace(refSpace);
		});

		// Check for hand-tracking support
		if (session.inputSources) {
			session.inputSources.forEach((inputSource) => {
				if (inputSource.hand) {
					console.log("Hand tracking is supported and enabled.");
				}
			});
		}
	}
});

renderer.xr.addEventListener("sessionend", () => {
	// Re‑center view for desktop preview
	camera.position.set(0, 0, 0);
	camera.quaternion.set(0, 0, 0, 1);
	controls.target.set(0, 0, -1);
	panoramaLeft.position.set(0, 0, 0);
	panoramaRight.position.set(0, 0, 0);
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
window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add XR controllers
const controller1 = renderer.xr.getController(0);
const controller2 = renderer.xr.getController(1);
scene.add(controller1);
scene.add(controller2);

const controllerModelFactory = new XRControllerModelFactory();

// Add controller models
const controllerGrip1 = renderer.xr.getControllerGrip(0);
controllerGrip1.add(controllerModelFactory.createControllerModel(controllerGrip1));
scene.add(controllerGrip1);

const controllerGrip2 = renderer.xr.getControllerGrip(1);
controllerGrip2.add(controllerModelFactory.createControllerModel(controllerGrip2));
scene.add(controllerGrip2);

// Add hand tracking support
const handModelFactory = new XRHandModelFactory();

const hand1 = renderer.xr.getHand(0);
hand1.add(handModelFactory.createHandModel(hand1, "mesh"));
scene.add(hand1);

const hand2 = renderer.xr.getHand(1);
hand2.add(handModelFactory.createHandModel(hand2, "mesh"));
scene.add(hand2);

const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1)]);

// const line = new THREE.Line( geometry );
// line.name = 'line';
// line.scale.z = 5;

// scene.add( line );
// controller2.add( line.clone() );

// Update the line to point in the direction of the index finger's last phalange
// function updateLineDirection(hand) {
//     if (hand && hand.joints) {
//         // const indexTip = hand.joints['index-finger-tip'];

//         // const indexBase = hand.joints['index-finger-metacarpal'];
//         const indexBase = hand.joints['index-finger-phalanx-proximal'];
//         // const indexBase = hand.joints['index-finger-phalanx-intermediate'];
//     //    const indexBase = hand.joints['index-finger-phalanx-distal'];

//         const indexTip = hand.joints['index-finger-phalanx-intermediate'];
//         // const indexTip = hand.joints['index-finger-tip'];

//         if (indexTip && indexBase) {
//             const tipPosition = new THREE.Vector3();
//             const basePosition = new THREE.Vector3();
//             indexTip.getWorldPosition(tipPosition);
//             indexBase.getWorldPosition(basePosition);
//             const direction = new THREE.Vector3().subVectors(tipPosition, basePosition).normalize();
//             if (line) {
//                 line.position.copy(indexTip.getWorldPosition(tipPosition));
//                 line.lookAt(tipPosition.add(direction));
//             }
//         }
//     }
// }

// Detect what the line is touching
// function detectLineIntersection(hand) {
//     if (hand) {
//         if (line) {
//             const raycaster = new THREE.Raycaster();
//             const lineDirection = new THREE.Vector3();
//             line.getWorldDirection(lineDirection);

//             const linePosition = new THREE.Vector3();
//             line.getWorldPosition(linePosition);

//             raycaster.set(linePosition, lineDirection);

//             // Check for intersections with objects in the scene
//             const intersects = raycaster.intersectObjects(scene.children, true);

//             if (intersects.length > 0) {
//                 const firstIntersection = intersects[0];
//                 const object = firstIntersection.object;

//                     // const intersectionPoint = firstIntersection.point;
//                     // console.log('Intersected a sphere at:', intersectionPoint.x);
//                     // Use intersectionPoint to look up a value in a depth map
//                     const uv = firstIntersection.uv;
//                     if (uv && object.material.map) {
//                         const texture = object.material.map;
//                         const x = Math.floor(uv.x * 1000);
//                         const y = Math.floor(uv.y * 1000);
//                         pointer=[x,y];
//                         // console.log(`Intersected sphere texture at pixel coordinates: (${x}, ${y})`);
//                     }

//             }
//         }
//     }
// }

const gamePads=[];
window.gamePads=()=>{return gamePads;}

function detectPress() {
    const actn=[[],[]];
    gamePads.forEach((gamepad, x) => {
        if(gamepad && gamepad.buttons){
            gamepad.buttons.forEach((button, i) => {
             actn[x][i]= gamepad.buttons[i].value;
           }); 
        }
    });
    window.actn=actn;
    if((actn[0][0]>0)||(actn[1][0]>0)){
        // console.log("pressed");
        if (lastCircle) {
            goSphere(lastCircle.userData.key);
        }
    }
	// if(lastCircle){
	//     goSphere(lastCircle.userData.key);
	// }
}

// Animation loop
function animate() {
	renderer.setAnimationLoop(() => {
		const hand = renderer.xr.getHand(0); // Assuming the line is attached to the first hand
		// updateLineDirection(hand);
		// detectLineIntersection(hand);
		detectPress();

		// Obtain headset position (works on Quest & emulator)
		const headPos = getHeadWorldPosition();
		if (xcamInit === 0) {
			xcamInit = true;
			panoramaLeft.position.copy(headPos);
			panoramaRight.position.copy(headPos);
		}

		// Ensure panoramaLeft and panoramaRight are defined before accessing their material properties
		if (panoramaLeft && panoramaLeft.material) {
			panoramaLeft.material.lightMap = null;
		}
		if (panoramaRight && panoramaRight.material) {
			panoramaRight.material.lightMap = null;
		}

		if (!renderer.xr.isPresenting) {
			controls.update(); // only update OrbitControls when not in XR
		}

		checkCameraDirection(); // Check camera direction and highlight circles

		renderer.render(scene, camera);
	});
}

animate();
//
export function goSphere(label) {
	const pos = vrMap[label].pos;
	console.log("label: ", label);

	mapObject.position.z = -pos[0];
	mapObject.position.x = -pos[1];

	// Update the texture of the left and right spheres dynamically
	textureLoader.load(`vr/${label}/day/0001_L.jpg`, (texture) => {
		texture.mapping = THREE.EquirectangularReflectionMapping;
		texture.colorSpace = THREE.SRGBColorSpace;
		texture.wrapS = THREE.RepeatWrapping;
		texture.repeat.x = -1;
		if (panoramaLeft) {
			panoramaLeft.material.map = texture;
			panoramaLeft.material.needsUpdate = true;
		}
	});

	textureLoader.load(`vr/${label}/day/0001_R.jpg`, (texture) => {
		texture.mapping = THREE.EquirectangularReflectionMapping;
		texture.colorSpace = THREE.SRGBColorSpace;
		texture.wrapS = THREE.RepeatWrapping;
		texture.repeat.x = -1;
		if (panoramaRight) {
			panoramaRight.material.map = texture;
			panoramaRight.material.needsUpdate = true;
		}
	});
}

// Automatically call goSphere with the first key in the "map"
const firstKey = Object.keys(vrMap)[0];
goSphere(firstKey);

// Create a map object to hold the circles

mapObject.position.y = -145;
mapObject.rotateY(Math.PI * 0.5);
scene.add(mapObject);
// window.ob=mapObject;

// Iterate over the vrMap and create a flat 2cm radius circle for each position
Object.keys(vrMap).forEach((key) => {
	const pos = vrMap[key].pos;

	// Create a flat circle geometry
	const cylinderGeometry = new THREE.CircleGeometry(20); // 2cm radius
	const circleMaterial = new THREE.MeshBasicMaterial({
		depthTest: false,
		color: pos[3] ? pos[3] : "#ff0000", // Red color
		side: THREE.DoubleSide,
		transparent: true,
		opacity: 0.1, // Make the circles semi-transparent
	});
	const circle = new THREE.Mesh(cylinderGeometry, circleMaterial);
	circle.position.set(-pos[0], -pos[2], pos[1]);
	circle.rotateX(Math.PI * 0.5); // Rotate the circle to face the camera

	// Add the circle to the map object
	mapObject.add(circle);

	// Store the circle in the map object
	circle.userData.key = key; // Store the key for reference
});

// Global variable to store the highlighted circle
let highlightedCircle = null;

// Update the angle threshold to 10 degrees
const ANGLE_THRESHOLD = Math.PI / 18; // 10 degrees in radians

var lastCircle = null;
// window.getLastCircle=function(){
//     if(lastCircle){
//         return lastCircle.userData.key;
//     }
//     return lastCircle;
// }
// Function to check the direction of the camera and highlight the closest circle
function checkCameraDirection() {
	const cameraDirection = new THREE.Vector3();
	camera.getWorldDirection(cameraDirection);
	cameraDirection.y = 0; // Ignore vertical axis
	cameraDirection.normalize();

	let closestCircle = null;
	let closestDistance = Infinity;

	mapObject.children.forEach((child) => {
		if (child instanceof THREE.Mesh) {
			const circlePosition = new THREE.Vector3();
			child.getWorldPosition(circlePosition);
			circlePosition.y = 0; // Ignore vertical axis

			const toCircle = new THREE.Vector3().subVectors(circlePosition, camera.position).normalize();
			const angle = cameraDirection.angleTo(toCircle);

			if (angle < ANGLE_THRESHOLD) {
				// Check if within 10 degrees
				const distance = camera.position.distanceTo(circlePosition);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestCircle = child;
				}
			}
		}
	});

	if (closestCircle !== highlightedCircle) {
		if (highlightedCircle) {
			highlightedCircle.material.opacity = 0.1;
			// console.log("Deselected circle:", highlightedCircle.userData.key);
		}
		if (closestCircle) {
			lastCircle = closestCircle;
			closestCircle.material.opacity = 1; // Highlight color
		} else {
			lastCircle = null;
		}
		highlightedCircle = closestCircle;
	}
}



// Add event listeners for all XR controller events
controllerGrip1.addEventListener("connected", (e) => {
	gamePads[0]=e.data.gamepad;
});
controllerGrip1.addEventListener("disconnected", (e) => {});
controllerGrip2.addEventListener("connected", (e) => {
	gamePads[1]=e.data.gamepad;
});
controllerGrip2.addEventListener("disconnected", (e) => {});

window.addEventListener("keydown", function (e) {
	switch (e.which) {
		case 32: // 1
			if (lastCircle) {
				goSphere(lastCircle.userData.key);
			}
			break;
		case 49: // 1
			goSphere("A");
			break;
		case 50: // 1
			goSphere("B");
			break;
		default:
			console.log("Key not mapped", e.which);
			break;
	}
});
