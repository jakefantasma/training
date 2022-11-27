import { getCurrentScene } from "./Contextos.js";
let Entidades = [];
export function addEntity(entidad) {
  let ___ManagerScene = getCurrentScene();
  entidad.inflator();
  //establecemos el nombre para el id
  //entidad.name = entidad.getGmt.uuid;
  let ref = entidad.getGmt();
  ref.name = ref.uuid;
  ___ManagerScene.add(ref);
  Entidades.push(entidad);
}

export function getListEntities() {
  return Entidades;
}
export function RemoveByNameEntity(name) {
  let ___ManagerScene = getCurrentScene();
  let fi = ___ManagerScene.getObjectByName(name);
  if (fi != undefined) {
    ___ManagerScene.remove(fi);
    Entidades = Entidades.reduce((col, el) => {
      if (el._name != name) {
        col.push(el);
      }
      return col;
    }, []);
  }
}

export function updateEntities() {
  //console.log(Entidades.length);
  Entidades.map((entiti) => {
    entiti.update();
    let t = entiti.getGmt();
  });
}
