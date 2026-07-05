import * as THREE from "three";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 30, 150);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 6, 12);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Ambient Light
const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

// Sun Light
const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(10, 20, 10);
scene.add(sun);

// Ground
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(200, 200),
  new THREE.MeshLambertMaterial({
    color: 0x3d8b37
  })
);

ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Road
const road = new THREE.Mesh(
  new THREE.PlaneGeometry(8, 200),
  new THREE.MeshLambertMaterial({
    color: 0x222222
  })
);

road.rotation.x = -Math.PI / 2;
road.position.y = 0.01;
scene.add(road);

// Lane Lines
const laneMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff
});

const laneLines = [];

for (let i = 0; i < 40; i++) {

  const line = new THREE.Mesh(
    new THREE.PlaneGeometry(0.15, 2),
    laneMaterial
  );

  line.rotation.x = -Math.PI / 2;
  line.position.set(0, 0.02, -i * 5);

  scene.add(line);
  laneLines.push(line);

}

// Sun Sphere
const sunMesh = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshBasicMaterial({
    color: 0xffdd66
  })
);

sunMesh.position.set(0, 40, -80);
scene.add(sunMesh);

// Animation
function animate() {

  requestAnimationFrame(animate);

  laneLines.forEach(line => {

    line.position.z += 0.5;

    if (line.position.z > 10) {
      line.position.z = -190;
    }

  });

  renderer.render(scene, camera);

}

animate();

// Resize
window.addEventListener("resize", () => {

  camera.aspect =
    window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

});
