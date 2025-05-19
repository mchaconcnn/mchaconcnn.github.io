import * as THREE from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { XRControllerModelFactory } from "three/examples/jsm/webxr/XRControllerModelFactory.js";
import { XRHandModelFactory } from "three/examples/jsm/webxr/XRHandModelFactory.js";
import { InteractiveGroup } from "three/examples/jsm/interactive/InteractiveGroup.js";
import { HTMLMesh } from "three/addons/interactive/HTMLMesh.js";
// import { GUI } from "three/addons/libs/lil-gui.module.min.js";

const spheres = ["cocina", "gradas", "sala", "pasillo","patio"];
let currentSphere = 0;

let isUsingLayers = false;

let renderer, equirectLayer, xrRefSpace, binding, gl, initPose, controls, group, nav, camGroup, mainBump,repaintLayers;
let splTexture = { loaded: false };
const uiObjects = [];
const layersSupported = true;
THREE.ColorManagement.enabled = true;

const raycaster = [];
// const intersected=[];

// const raycasterL = new THREE.Raycaster();
// const raycasterR = new THREE.Raycaster();

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x444444);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);
camera.position.set(0, 0, 0);
camera.layers.enable(1);
const axis = new THREE.Group();
axis.position.set(0, 0, 0);
scene.add(axis);




const geometry = new THREE.SphereGeometry(12, 60, 60);
const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.BackSide, wireframe: false });
const sphereL = new THREE.Mesh(geometry, material.clone());
const sphereR = new THREE.Mesh(geometry, material.clone());
sphereL.userData = { type: "sphere", name: "sphereL" };
sphereR.userData = { type: "sphere", name: "sphereR" };
sphereL.layers.set(1);
sphereL.layers.enable(0);
sphereR.layers.set(2);
axis.add(sphereL);
axis.add(sphereR);

// function debugMeshes() {
//     const debugPos = [
//         [0, 0, 0],
//         [1, 0.5, 1],
//         [1, 0.5, -1],
//         [1, -0.5, 1],
//         [1, -0.5, -1],
//         [-1, -0.5, 1],
//         [-1, -0.5, -1],
//         [-1, 0.5, 1],
//         [-1, 0.5, -1],

//         [0, 0.25, 1.5],
//         [0, -0.25, 2],

//         [1, 0.5, 1 - 7],
//         [1, 0.5, -1 - 7],
//         [1, -0.5, 1 - 7],
//         [1, -0.5, -1 - 7],
//         [-1, -0.5, 1 - 7],
//         [-1, -0.5, -1 - 7],
//         [-1, 0.5, 1 - 7],
//         [-1, 0.5, -1 - 7],
//     ];
//     const dbgGp = new THREE.Group();
//     dbgGp.position.set(0, 0, -2);

//     axis.add(dbgGp);


//     let debugSp, dbMesh;
//     const debugMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0, metalness: 1 });
//     for (var b = 0; b <= 18; b++) {
//         debugSp = new THREE.SphereGeometry(0.1, 64, 64);
//         dbMesh = new THREE.Mesh(debugSp, debugMaterial);
//         dbMesh.position.set(debugPos[b][0], debugPos[b][1], debugPos[b][2]);
//         dbgGp.add(dbMesh);
//     }
// }
// debugMeshes();


function supportLayers(session) {
    if (layersSupported === false) return false;
    if (!session) return false;
    return session && session.enabledFeatures !== undefined && session.enabledFeatures.includes("layers") && XRWebGLBinding !== undefined;
}


init();
function init() {
    // const hemLight = new THREE.HemisphereLight(0x808080, 0x606060, 3);
    // const light = new THREE.DirectionalLight(0xffffff, 3);
    // scene.add(hemLight, light);


    renderer = new THREE.WebGLRenderer({ antialias: true });
    // window.renderer=renderer;
    // window.THREE=THREE;


    renderer.toneMapping = THREE.AgXToneMapping;
    // renderer.toneMappingExposure = 0;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    renderer.setClearAlpha(1);
    renderer.setClearColor(new THREE.Color(0), 0);
    renderer.xr.enabled = true;

    // controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.05;
    // controls.enablePan = true;
    // controls.minDistance = 0.1;
    // controls.maxDistance = 10;
    // controls.target.set(0, 0, -0.00001);
    // controls.update();




    renderer.xr.addEventListener("sessionstart", async () => {
        // controls.enabled = false;
        camera.position.set(0, 0, 0);

    });
    // renderer.xr.addEventListener("sessionend", () => {

    // });





    document.body.appendChild(renderer.domElement);
    document.body.appendChild(VRButton.createButton(renderer, {
        requiredFeatures: ["hand-tracking"],
        optionalFeatures: ["local-floor", "layers"],
    }));

    // controllers



    const controllerModelFactory = new XRControllerModelFactory();
    const handModelFactory = new XRHandModelFactory();//.setPath("./models/fbx/");

    //




    const controllers = [renderer.xr.getController(0), renderer.xr.getController(1)];
    controllers.forEach((controller, i) => {
        scene.add(controller);


        // Add event listeners for button press and release
        controller.addEventListener("selectstart", () => {
            // const pp = (i == 0) ? 1 : -1;
            currentSphere += 1;
            if (currentSphere < 0) currentSphere = spheres.length - 1;
            if (currentSphere >= spheres.length) currentSphere = 0;

            document.location.href=(spheres[currentSphere])+".html";

            // Add your logic for button press here
        });

        // controller.addEventListener("selectend", () => {
        //     console.log(`Controller ${i} button released`);
        //     // Add your logic for button release here
        // });



        const controllerGrip = renderer.xr.getControllerGrip(i);
        controllerGrip.add(controllerModelFactory.createControllerModel(controllerGrip));
        scene.add(controllerGrip);
        const hand = renderer.xr.getHand(i);
        hand.add(handModelFactory.createHandModel(hand, "mesh"));
        scene.add(hand);

        // const rc = new THREE.Raycaster();
        // rc.far = 30;
        // rc.near = 0.1;
        // rc.recursive = false;
        // rc.setFromXRController(controller);
        // rc.layers.set( 0 );
        // controllerGrip.add(rc);

        const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -10)]);
        const line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 3 }));
        line.renderOrder = 1;

        // raycaster[i] = { ray: rc, grip: controller, line: line };
        controller.add(line);
        scene.add(controller, controllerGrip, hand);
    });

    group = new InteractiveGroup();
    group.listenToXRControllerEvents(controllers[0]);
    group.listenToXRControllerEvents(controllers[1]);
    axis.add(group);

    const rootEl = document.getElementById("map");
    const htmlMesh = new HTMLMesh(rootEl);


    // camGroup = new THREE.Group();
    // // htmlMesh.layers.enable(0);
    // htmlMesh.name = "map";
    // htmlMesh.scale.setScalar(4)
    // htmlMesh.position.set(0, 0, -1)
    // htmlMesh.material.transparent = true;
    // htmlMesh.material.opacity = 0.8;
    // htmlMesh.layers.enable(4);
    // htmlMesh.geometry.computeBoundingBox();
    // camGroup.add(htmlMesh);
    // htmlMesh.userData = { type: "mainUI", name: "map" };
    // uiObjects.push(htmlMesh);
    // axis.add(camGroup);
    // htmlMesh.layers.enable(3);
    // // group.updateMatrixWorld(true);

    // nav = new InteractiveGroup();
    // axis.add(nav);
    // document.querySelectorAll('#nav-cocina>div').forEach((el) => {
    //     const navDom = new HTMLMesh(el);
    //     const navDolly = new THREE.Group();
    //     navDom.scale.setScalar(4);

    //     navDom.position.set(el.dataset.x, el.dataset.y, el.dataset.z);
    //     navDolly.rotation.set(0, THREE.MathUtils.degToRad(el.dataset.rot), 0);
    //     navDom.material.transparent = true;
    //     navDom.material.opacity = 0.8;
    //     navDom.layers.enable(4);
    //     navDom.userData = { type: "wayPoint", name: el.dataset.id };
    //     uiObjects.push(navDom);
    //     navDolly.add(navDom);
    //     nav.add(navDolly);
    // });




    window.addEventListener("resize", onWindowResize, false);
}

function disposeSphere(sphere) {
    if (sphere.material.map) {
        sphere.material.map.dispose(); // Dispose of the texture
    }
    sphere.material.dispose(); // Dispose of the material
    sphere.geometry.dispose(); // Dispose of the geometry
    axis.remove(sphere); // Remove the sphere from the scene
}

async function animate(t, frame) {
    // guiMesh.material.map.update();
    // Init layers once in immersive mode and video is ready.
    const session = renderer.xr.getSession();
    gl = renderer.getContext();
    await gl.makeXRCompatible();


    const useLayers = supportLayers(session);

    if (session && useLayers && (session.hasMediaLayer === undefined) && (splTexture.loaded == true)) {
        console.log("Session started with layers");
        isUsingLayers = true;
        disposeSphere(sphereL);
        disposeSphere(sphereR);

        if (session) {  //} && session.hasMediaLayer === undefined) {
            session.hasMediaLayer = true;
            session.requestReferenceSpace("local-floor").then((refSpace) => {
                xrRefSpace = refSpace;
                binding = new XRWebGLBinding(session, gl);
                equirectLayer = binding.createEquirectLayer({
                    space: refSpace,
                    viewPixelWidth: splTexture.width / 2,
                    viewPixelHeight: splTexture.height,
                    centralHorizontalAngle: Math.PI * 2,
                    upperVerticalAngle: Math.PI / 2.0,
                    lowerVerticalAngle: -Math.PI / 2.0,
                    layout: "stereo-left-right",
                    radius: 12,
                    isStatic: true
                });

                // axis.remove(sphereL);
                // axis.remove(sphereR);
                console.log("Painting GLayer");
                splTexture.rendered = true;
                const pose = frame.getViewerPose(xrRefSpace);
                pose.views.forEach((view) => {
                    const lTex = splTexture[view.eye].image;
                    const subImage = binding.getSubImage(equirectLayer, frame, view.eye);
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                    gl.bindTexture(gl.TEXTURE_2D, subImage.colorTexture);
                    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, lTex);
                    gl.bindTexture(gl.TEXTURE_2D, null);
                    console.log('painted', view.eye, lTex);
                });

                session.updateRenderState({
                    layers: [equirectLayer, session.renderState.layers[0]],
                });
            });
        }
    } else {
        if (session && initPose == undefined) {
            if (camera.position.x != 0 || camera.position.y != 0 || camera.position.z != 0) {
                initPose = camera.position;
                // console.log(initPose)
                axis.position.copy(initPose);
            }
        }

    }


    // if (session && useLayers && (equirectLayer != undefined) && (equirectLayer.needsRedraw) && (splTexture.loaded == true) && (splTexture.rendered == false)) {
    // console.log("Painting GLayer");
    // splTexture.rendered = true;
    // const pose = frame.getViewerPose(xrRefSpace);
    // pose.views.forEach((view) => {
    //     const subImage = binding.getSubImage(equirectLayer, frame, view.eye);
    //     gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    //     gl.bindTexture(gl.TEXTURE_2D, subImage.colorTexture);
    //     const img = view.eye === "left" ? splTexture.left.image : splTexture.right.image;
    //     gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, img);
    //     gl.bindTexture(gl.TEXTURE_2D, null);
    // });
    // console.log('painted');
    // session.updateRenderState();
    // }


    // camGroup.rotation.copy(camera.rotation);

    // checkIntersections(session);

    renderer.render(scene, camera);
}


// function map(value, inMin, inMax, outMin, outMax) {
//     return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
// }


// function testCast(i, intersects) {
//     if (intersects[0].object.userData.type == "sphere") {
//         if (intersects[0].uv && mainBump) {
//             const x = Math.floor((1 - intersects[0].uv.x) * mainBump.canvas.width);
//             const y = Math.floor((1 - intersects[0].uv.y) * mainBump.canvas.height);


//             // Get the pixel data (distance from axis center)
//             const pixelData = mainBump.getImageData(x, y, 1, 1).data[0];
//             const lineScale=(255-pixelData)/255;

//             window.debugData=lineScale;
//             intersects[1].line.scale.set(1, 1, lineScale);
//             // console.log(`${i}: ${map(intersects[0].uv.y,0,1,mainBump.canvas.height,0)},${intersects[0].uv.y}  : ${pixelData}`);
//         }

//     }
//     // console.log(i,intersects.object.userData.type);
// }


// function checkIntersections(session) {
//     if (!session) return;
//     const casted = [];
//     raycaster.forEach((cast, i) => {
//         cast.ray.set(cast.grip.position, new THREE.Vector3(0, 0, -1).applyQuaternion(cast.grip.quaternion));
//         cast.ray.layers.set(4);

//         const intersects = cast.ray.intersectObjects(axis.children, true)[0];
//         if (intersects) {
//             // const points = [
//             //     cast.grip.position.clone(), // Start point
//             //     intersects.point.clone(), // End point at the intersection
//             // ];
//             // cast.line.geometry.setFromPoints(points); 
//         } else {
//             // const points = [
//             //     cast.grip.position.clone(), // Start point
//             //     cast.grip.position.clone().add(new THREE.Vector3(0, 0, -1).applyQuaternion(cast.grip.quaternion).multiplyScalar(cast.ray.far)), // Default end point
//             // ];
//             // cast.line.geometry.setFromPoints(points); // Update the line to its full length if no intersection
//         }
//         casted[i] = [intersects, cast];
//     });
//     // if (casted[0]) {
//     //     testCast(0, casted[0])
//     // }
//     // if (casted[1]) {
//     //     testCast(1, casted[1])
//     // }

// }

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function loadEquirect(id) {

    

    const loader = new THREE.TextureLoader();
    document.getElementById("status").innerHTML = `Loading ${id}...`;

    loader.load(`media/${id}/sbs0001.jpg`, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        // console.log("loaded");
        // loader.load(`media/${id}/depth0001.png`, (bump) => {
        //     console.log("loadedDepth");
        //     bump.colorSpace = THREE.NoColorSpace;
        //     const canvas = document.createElement("canvas");
        //     mainBump = canvas.getContext("2d");
        //     canvas.width = bump.image.width;
        //     canvas.height = bump.image.height;
        //     mainBump.drawImage(bump.image, 0, 0);
        // });
        splTexture = splitTopBottom(tex);
        repaintLayers=true;
        
        if (isUsingLayers == false) {
            sphereL.material.map = splTexture.left;
            sphereL.material.color = new THREE.Color(0xffffff);
            sphereL.material.needsUpdate = true;
            sphereR.material.map = splTexture.right;
            sphereR.material.color = new THREE.Color(0xffffff);
            sphereR.material.needsUpdate = true;
            document.getElementById("status").innerHTML = id;
        }else{

        }
    });
}



function splitTopBottom(texture) {
    const texR = texture.clone();
    texR.repeat.set(-0.5, 1); // Flip horizontally and adjust for side-by-side (right half)
    texR.offset.set(1, 0); // Right side of the texture
    texR.mapping = THREE.EquirectangularRefractionMapping;

    const texL = texture.clone();
    texL.repeat.set(-0.5, 1); // Flip horizontally and adjust for side-by-side (left half)
    texL.offset.set(0.5, 0); // Left side of the texture
    texL.mapping = THREE.EquirectangularRefractionMapping;

    scene.environment = texL;
    // scene.environmentIntensity = 2;

    return {
        left: texL,
        right: texR,
        width: texture.image.width,
        height: texture.image.height,
        loaded: true,
        rendered: false,
    };
}
currentSphere = window.currentSphere || 0;

loadEquirect(spheres[currentSphere]);
// loadCenter("cocina");