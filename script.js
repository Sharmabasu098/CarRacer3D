import * as THREE from "three";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

// Camera
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(0,6,10);

// Renderer
const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(
window.devicePixelRatio
);

document.body.appendChild(
renderer.domElement
);

// Lights
const ambient=new THREE.AmbientLight(
0xffffff,
1
);

scene.add(ambient);

const sun=new THREE.DirectionalLight(
0xffffff,
2
);

sun.position.set(10,20,10);

scene.add(sun);

// Ground
const ground=new THREE.Mesh(
new THREE.PlaneGeometry(200,200),
new THREE.MeshLambertMaterial({
color:0x2e8b57
})
);

ground.rotation.x=-Math.PI/2;

scene.add(ground);

// Road
const road=new THREE.Mesh(
new THREE.PlaneGeometry(8,200),
new THREE.MeshLambertMaterial({
color:0x222222
})
);

road.rotation.x=-Math.PI/2;
road.position.y=0.01;

scene.add(road);

// Lane Lines
const laneLines=[];

for(let i=0;i<40;i++){

const line=new THREE.Mesh(
new THREE.PlaneGeometry(0.2,2),
new THREE.MeshBasicMaterial({
color:0xffffff
})
);

line.rotation.x=-Math.PI/2;

line.position.set(
0,
0.02,
-i*5
);

scene.add(line);

laneLines.push(line);// ===================
// Player Car
// ===================

const car=new THREE.Group();

const body=new THREE.Mesh(

new THREE.BoxGeometry(
1.4,
0.5,
2.8
),

new THREE.MeshLambertMaterial({
color:0x0066ff
})

);

body.position.y=0.45;

car.add(body);

const roof=new THREE.Mesh(

new THREE.BoxGeometry(
1,
0.4,
1.2
),

new THREE.MeshLambertMaterial({
color:0x99ccff
})

);

roof.position.set(
0,
0.9,
-0.1
);

car.add(roof);

function addWheel(x,z){

const wheel=new THREE.Mesh(

new THREE.CylinderGeometry(
0.25,
0.25,
0.25,
16
),

new THREE.MeshLambertMaterial({
color:0x111111
})

);

wheel.rotation.z=Math.PI/2;

wheel.position.set(
x,
0.25,
z
);

car.add(wheel);

}

addWheel(-0.7,1);
addWheel(0.7,1);
addWheel(-0.7,-1);
addWheel(0.7,-1);

scene.add(car);// ===================
// Animation
// ===================

function animate(){

requestAnimationFrame(animate);

laneLines.forEach(line=>{

line.position.z+=0.4;

if(line.position.z>5){

line.position.z=-195;

}

});

camera.position.x=car.position.x;

camera.position.y=5;

camera.position.z=
car.position.z+8;

camera.lookAt(
car.position
);

renderer.render(
scene,
camera
);

}

animate();

// Resize

window.addEventListener(
"resize",
()=>{

camera.aspect=
window.innerWidth/
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

}
);

}
