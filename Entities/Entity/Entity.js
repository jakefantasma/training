export class Entity {
  gmt = null;
  constructor(x_, y_) {
    this._x = x_;
    this._y = y_;
  }
  updateGmt(gmt_) {
    this.gmt = gmt_;
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
  SyncPotition() {
    this.gmt.position.x = this.getX();
    this.gmt.position.y = this.getY();
    this.gmt.position.z = 5; 
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
    console.log("default called");
  }
  inflator() {}
}