import { addEntity } from "../../GestorEntidades.js";
import { Entity, Disparo, Box } from "../Entites.js";
import { Panel } from "../../panelhandler.js";
export class Player extends Entity {
  constructor(x_, y_, z_) {
    super(x_, y_);
    this._x = x_;
    this._y = y_;
    this._z = z_ - 0.75; //fix to potition
  }
  inflator() {
    Panel.log("inflando entdida");
    const geometry = new THREE.BoxGeometry(2.5, 3, 1.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x6900f6 });
    this.updateGmt(new THREE.Mesh(geometry, material));
    this.SyncPotition();
  }
  action() {
    Panel.log("disparo");
    addEntity(new Disparo(this.getX(), this.getY(), this.getZ()));
  }
  update() {
    //Panel.log("actualizando palyaewr");
    //console.log(this.getX() + " - " + this.getY());
    //this.moveX(5);
  }
}
