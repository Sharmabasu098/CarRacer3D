.PI / 2;
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
