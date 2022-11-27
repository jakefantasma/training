let keys = [];
export function AddAccion(keymap, accion) {
  keys.push({ key: keymap, accion: accion });
}
document.addEventListener("keydown", (e) => {
  Object.keys(keys).map((i) => {
    let item = keys[i];
    if (item.key.includes(e.key)) {
      item.accion();
    }
  });
  //console.log(e.key);
});
