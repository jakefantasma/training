import { Entity, Disparo } from "../Entites.js";
import { Panel } from "../../panelhandler.js";
export class Player extends Entity {
  constructor(x_, y_, z_) {
    super(x_, y_);
    this._x = x_;
    this._y = y_;
    this._z = z_ - 0.75; //fix to potition
  }
  inflator() {
    console.log("inflando entdida");
    const geometry = new THREE.BoxGeometry(2.5, 3, 1.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x6900f6 });
    this.updateGmt(new THREE.Mesh(geometry, material));
    this.SyncPotition();
  }
  action() {
    console.log("agregamos disparo");
    Panel.log("disapro");
    

  }
  update() {
    //console.log(this.getX() + " - " + this.getY());
    //this.moveX(5);
  }
}
