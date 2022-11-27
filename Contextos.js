import { Panel } from "./panelhandler.js";
import { updateEntities, getListEntities } from "./GestorEntidades.js";

let ___ManagerScene = null;
let ___ManagerCamera = null;
let render = null;
//define el contexto para los ajustes globales por si se cambia
//de esena o de camara
export function setScene(Scene_, Camera_) {
  ___ManagerScene = Scene_;
  ___ManagerCamera = Camera_;
}
export function getCurrentScene() {
  return ___ManagerScene;
}
export function getCurrentCamera() {
  return ___ManagerCamera;
}

function mapa() {
  let size_x = 20;
  let largo = 39;
  let separacion = 2;
  for (let i = 0; i < size_x; i++) {
    line(0, 0, 0, largo);
    line(separacion * i, 0, separacion * i, largo);
  }
  for (let i = 0; i < size_x; i++) {
    line(0, 0, largo, 0);
    line(0, separacion * i, largo, separacion * i);
  }
}
function line(x, y, x_, y_) {
  let points = [];
  points.push(new THREE.Vector3(x, y, 0));
  points.push(new THREE.Vector3(x_, y_, 0));
  let geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const line = new THREE.Line(geometry, material);
  ___ManagerScene.add(line);
}
export function CreateCamera() {
  //TODO ES NECESARIO REALIZAR CAMBIO AQUI :V
  return new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
}
export function CreateScene() {
  return new THREE.Scene();
}
//append render to view <- and define de size screen
export function InitScreen(sizeW, sizeH) {
  //console.log("render append");
  render = new THREE.WebGLRenderer();
  render.setSize(sizeW, sizeH);
  document.body.appendChild(render.domElement);
}
export function setCurrentRender(esena_, camera_) {
  ___ManagerScene = esena_;
  ___ManagerCamera = camera_;
  mapa();
}
export function Loop() {
  updateEntities();
  requestAnimationFrame(Loop);
  Panel.update(___ManagerCamera, getListEntities());
  render.render(___ManagerScene, ___ManagerCamera);
}
