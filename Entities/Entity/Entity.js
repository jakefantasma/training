export class Entity {
  gmt = null;
  _name = "";
  constructor(x_, y_, z_) {
    this._x = x_;
    this._y = y_;
    this._z = z_;
  }
  getName() {
    return this._name;
  }
  updateGmt(gmt_) {
    this.gmt = gmt_;
    this._name = gmt_.uuid;
  }
  getGmt() {
    return this.gmt;
  }
  getX() {
    return this._x;
  }
  getY() {
    return this._y;
  }
  getZ() {
    return this._z;
  }
  SyncPotition() {
    this.gmt.position.x = this.getX();
    this.gmt.position.y = this.getY();
    this.gmt.position.z = this.getZ();
  }
  moveX(step_) {
    this._x += step_;
    this.SyncPotition();
  }
  moveY(step_) {
    this._y += step_;
    this.SyncPotition();
  }
  update() {
    //console.log("default called");
  }
  inflator() {}
}
