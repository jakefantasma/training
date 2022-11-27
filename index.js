import {
  getCurrentCamera,
  setScene,
  CreateScene,
  CreateCamera,
  AddAccion,
  InitScreen,
  setCurrentRender,
  getCurrentScene,
  Player,
  Loop,
  Box,
  addEntity,
} from "./Manager.js";
let camera = null;
let step = 0.5;
let pl = null;
camera = CreateCamera();
AddAccion(["ArrowDown"], () => {
  camera.rotation.x += step;
});
AddAccion(["ArrowUp"], () => {
  camera.rotation.x -= step / 2;
});
AddAccion(["ArrowRight"], () => {
  camera.rotation.y -= step / 2;
});
AddAccion(["ArrowLeft"], () => {
  camera.rotation.y += step;
});
AddAccion(["W", "w"], () => {
  //camera.position.y += step;
  //pl.moveY(step);
});
AddAccion(["S", "s"], () => {
  //camera.position.y -= step;
  //pl.moveY(-step);
});
let mv = step * 10;
AddAccion(["A", "a"], () => {
  camera.position.x -= mv;
  pl.moveX(-mv);
});
AddAccion(["D", "d"], () => {
  camera.position.x += mv;
  //camera.position.x += step;
  pl.moveX(mv);
});
AddAccion(["PageDown"], () => {
  camera.position.z -= step;
});
AddAccion(["PageUp"], () => {
  camera.position.z += step;
});
AddAccion(["Home"], () => {});
AddAccion(["q", "Q"], () => {
  pl.action();
  //addEntity(getBox(camera.position.x, camera.position.y));
});
AddAccion(["Control"], () => {
  //pl.action();
  addEntity(new Disparo(pl.getX(), pl.getY()));
});
InitScreen(window.innerWidth - 400, window.innerHeight);
setCurrentRender(CreateScene(), camera);
camera.position.z = 5.5;
camera.position.y = -10;
camera.rotation.x = 1.25;
let nivel = 1.5;
//addEntity(pl);
pl = new Player(0, 0, nivel);
addEntity(pl);
addEntity(new Box(4, 3, nivel));
addEntity(new Box(18, 10, nivel));
Loop();
