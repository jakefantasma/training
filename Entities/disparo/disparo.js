import { Entity } from "../Entity/Entity.js";
import { RemoveByNameEntity } from "../../GestorEntidades.js";

export class Disparo extends Entity {
  constructor(x_, y_, z_) {
    super(x_, y_);
    this._x = x_;
    this._y = y_;
    this._z = z_ - 0.75; //fix to potition
  }
  inflator() {
    //Panel.log("inflando disparo");
    const geometry = new THREE.BoxGeometry(0.3, 2, 0.3);
    const material = new THREE.MeshBasicMaterial({ color: 0x6900f6 });
    this.updateGmt(new THREE.Mesh(geometry, material));
    this.SyncPotition();
  }
  update() {
    //let gm = this.getGmt();
    //gm.rotation.y += 1;
    if (this.getY() < 40) {
      this.moveY(0.5);
    } else {
      RemoveByNameEntity(this.getName());
    }
  }
}
