import { scene, camera, renderer } from "./js/scene.js";
import { createRoad, updateRoad } from "./js/road.js";

// Create Game World
createRoad();

// Animation Loop
function animate() {

  requestAnimationFrame(animate);

  // Update Road
  updateRoad();

  // Render Scene
  renderer.render(scene, camera);

}

animate();

// Resize
window.addEventListener("resize", () => {

  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

});
