import {
  Box,
  AddAccion,
  Loop,
  getCamera,
  getScene,
  setCurrentRender,
  addEntity,
  InitScreen,
  Panel,
} from "./Manager.js";
let camera = null;
let step = 0.5;
camera = getCamera();
AddAccion(["ArrowDown"], () => {
  camera.rotation.x += step;
});
AddAccion(["ArrowUp"], () => {
  camera.rotation.x -= step;
});
AddAccion(["ArrowRight"], () => {
  camera.rotation.y -= step;
});
AddAccion(["ArrowLeft"], () => {
  camera.rotation.y += step;
});
AddAccion(["W", "w"], () => {
  camera.position.y += step;
});
AddAccion(["S", "s"], () => {
  camera.position.y -= step;
});
AddAccion(["A", "a"], () => {
  //camera.rotation.y -= step;
});
AddAccion(["D", "d"], () => {
  //camera.rotation.y += step;
});
AddAccion(["PageDown"], () => {
  camera.position.z -= step;
});
AddAccion(["PageUp"], () => {
  camera.position.z += step;
});
AddAccion(["Home"], () => {});
AddAccion(["q"], () => {
  //addEntity(getBox(camera.position.x, camera.position.y));
});
//metodos aplicados
//addEntity(new Box(6, 4));
InitScreen(window.innerWidth - 400, window.innerHeight);
setCurrentRender(getScene(), camera);
camera.position.z = 5;
camera.position.y = -12.5;
camera.rotation.x = 1.5;
addEntity(new Box(0, 0));
addEntity(new Box(4, 3));
addEntity(new Box(8, 0));
Loop();
