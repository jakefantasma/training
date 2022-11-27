import { Entity } from "../Entity/Entity.js";
import { Panel } from "../../panelhandler.js";
export class Box extends Entity {
  direction = false;
  constructor(x_, y_, z_) {
    super(x_, y_);
    this._x = x_;
    this._y = y_;
    this._z = z_;
  }
  inflator() {
    Panel.log("inflando box");
    const geometry = new THREE.BoxGeometry(5, 1, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.updateGmt(new THREE.Mesh(geometry, material));
    this.SyncPotition();
  }
  update() {
    let mv = 0.4;
    if (this.direction) {
      if (this.getX() >= 0) {
        this.moveX(-mv);
      } else {
        this.direction = false;
      }
    } else {
      if (this.getX() <= 37) {
        this.moveX(mv);
      } else {
        this.direction = true;
      }
    }
  }
}
