import * as THREE from "three";
import { scene } from "./scene.js";

export const car = new THREE.Group();

export function createPlayer() {

  // Body
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.5, 2.8),
    new THREE.MeshLambertMaterial({
      color: 0x0077ff
    })
  );

  body.position.y = 0.45;
  car.add(body);

  // Roof
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.4, 1.2),
    new THREE.MeshLambertMaterial({
      color: 0xaaddff
    })
  );

  roof.position.set(0,0.9,-0.1);
  car.add(roof);

  // Wheels
  function addWheel(x,z){

    const wheel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25,0.25,0.25,16),
      new THREE.MeshLambertMaterial({
        color:0x111111
      })
    );

    wheel.rotation.z = Math.PI/2;
    wheel.position.set(x,0.25,z);

    car.add(wheel);

  }

  addWheel(-0.7,1);
  addWheel(0.7,1);
  addWheel(-0.7,-1);
  addWheel(0.7,-1);

  scene.add(car);

}
