import { getCurrentScene } from "./Contextos.js";
let Entidades = [];
export function addEntity(entidad) {
  let ___ManagerScene = getCurrentScene();
  entidad.inflator();
  console.log(entidad);
  ___ManagerScene.add(entidad.getGmt());
  Entidades.push(entidad);
}
export function updateEntities() {
  Entidades.map((entiti) => {
    entiti.update();
    //console.log(entiti);
  });
}
