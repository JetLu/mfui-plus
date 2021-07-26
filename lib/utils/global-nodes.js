import isServer from "./isServer";
var globalNodes = [];
var target = isServer ? void 0 : document.body;
export function createGlobalNode(id) {
  var el = document.createElement('div');

  if (id !== void 0) {
    el.id = id;
  }

  target.appendChild(el);
  globalNodes.push(el);
  return el;
}
export function removeGlobalNode(el) {
  globalNodes.splice(globalNodes.indexOf(el), 1);
  el.remove();
}
export function changeGlobalNodesTarget(el) {
  if (el !== target) {
    target = el;
    globalNodes.forEach(function (el) {
      if (el.contains(target) === false) {
        target.appendChild(el);
      }
    });
  }
}