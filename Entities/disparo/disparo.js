import { Entity } from "../Entity/Entity.js";
export class Disparo extends Entity {
  constructor(x_, y_) {
    super(x_, y_);
    this._x = x_;
    this._y = y_;
  }
  inflator() {
    console.log("inflando entdida");
    const geometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.updateGmt(new THREE.Mesh(geometry, material));
    this.SyncPotition();
  }
  update() {
    //console.log(this.getX() + " - " + this.getY());
    //this.moveX(5);d
  }
}
