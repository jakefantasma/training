export function saveConfig(config) {
  localStorage.setItem("configGame", config);
}
export function lodeConfig() {
  return localStorage.getItem();
}
