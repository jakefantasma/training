export { Box } from "./Entities/Entites.js";
export { AddAccion } from "./keys-map.js";
import { Panel } from "./panelhandler.js";

export { Panel } from "./panelhandler.js";
let ___ManagerScene = null;
let ___ManagerCamera = null;
let render = null;
//Console("asdasd");]
//Panel.log("test");
export function setCurrentRender(esena_, camera_) {
  ___ManagerScene = esena_;
  ___ManagerCamera = camera_;

  //agregamos el mapa
  const points = [];
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(0,-10, 0));



  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const line = new THREE.Line(geometry, material);

  ___ManagerScene.add(line);
}
export function getCamera() {
  //TODO ES NECESARIO REALIZAR CAMBIO AQUI :V
  return new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
}
export function getScene() {
  return new THREE.Scene();
}
//append render to view <- and define de size screen
export function InitScreen(sizeW, sizeH) {
  console.log("render append");
  render = new THREE.WebGLRenderer();
  render.setSize(sizeW, sizeH);
  document.body.appendChild(render.domElement);
}
let Entidades = [];
export function addEntity(entidad) {
  entidad.inflator();
  console.log(entidad);
  ___ManagerScene.add(entidad.getGmt());
  Entidades.push(entidad);
}
function updateEntities() {
  Entidades.map((entiti) => {
    entiti.update();
    //console.log(entiti);
  });
}
export function Loop() {
  requestAnimationFrame(Loop);
  Panel.update(___ManagerCamera);
  updateEntities();
  render.render(___ManagerScene, ___ManagerCamera);
}
//camera.position.z = 10;
//listener move
//renderView();
