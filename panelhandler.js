//do reference to element to view
let panelRef = {
  panel: null,
  CameraPotition: null,
  CameraRotation: null,
  Console: null,
};

function initPanel() {
  panelRef.panel = document.getElementById("panel");
  panelRef.CameraPotition = document.getElementById("CameraPotition");
  panelRef.CameraRotation = document.getElementById("CameraRotation");
  panelRef.Console = document.getElementById("Console");
}

function update(camera) {
  initPanel();
  panelRef.CameraPotition.innerHTML =
    "position: x:" +
    camera.position.x +
    "  y:" +
    camera.position.y +
    "  z:" +
    camera.position.z;

  panelRef.CameraRotation.innerHTML =
    "rotation: x:" +
    camera.rotation.x +
    "  y:" +
    camera.rotation.y +
    "  z:" +
    camera.rotation.z;
}
function log(msg) {
  panelRef.Console.innerHTML += msg + "\n";
}
initPanel();

export let Panel = {
  initPanel: initPanel,
  update: update,
  log: log,
};
