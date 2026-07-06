import { scene, camera, renderer } from "./js/scene.js";
import { createRoad, updateRoad } from "./js/road.js";
import { createPlayer, car } from "./js/player.js";

// Create World
createRoad();
createPlayer();

// Animation Loop
function animate() {

  requestAnimationFrame(animate);

  updateRoad();

  // Camera Follow
  camera.position.x = car.position.x;
  camera.position.y = 5;
  camera.position.z = car.position.z + 8;

  camera.lookAt(
    car.position.x,
    car.position.y,
    car.position.z
  );

  renderer.render(scene, camera);

}

animate();
