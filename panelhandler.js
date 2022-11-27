//do reference to element to view
let panelRef = {
  panel: null,
  CameraPotition: null,
  CameraRotation: null,
  Console: null,
  Entidades: null,
};

function initPanel() {
  panelRef.panel = document.getElementById("panel");
  panelRef.CameraPotition = document.getElementById("CameraPotition");
  panelRef.CameraRotation = document.getElementById("CameraRotation");
  panelRef.Console = document.getElementById("Console");
  panelRef.Entidades = document.getElementById("Cantidad");
}

function update(camera, entidad) {
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
  panelRef.Entidades.innerHTML = "Entidades: " + entidad.length;
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
