import { Fragment, Text, Comment, createBlock, openBlock, createCommentVNode, isVNode, camelize } from 'vue';
import { hasOwn } from '@vue/shared';
import { warn } from "./error";
var TEMPLATE = 'template';
export var SCOPE = 'VNode';
export var PatchFlags;

(function (PatchFlags) {
  PatchFlags[PatchFlags["TEXT"] = 1] = "TEXT";
  PatchFlags[PatchFlags["CLASS"] = 2] = "CLASS";
  PatchFlags[PatchFlags["STYLE"] = 4] = "STYLE";
  PatchFlags[PatchFlags["PROPS"] = 8] = "PROPS";
  PatchFlags[PatchFlags["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags[PatchFlags["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags[PatchFlags["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags[PatchFlags["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags[PatchFlags["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags[PatchFlags["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags[PatchFlags["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags[PatchFlags["HOISTED"] = -1] = "HOISTED";
  PatchFlags[PatchFlags["BAIL"] = -2] = "BAIL";
})(PatchFlags || (PatchFlags = {}));

export var isFragment = function isFragment(node) {
  return node.type === Fragment;
};
export var isText = function isText(node) {
  return node.type === Text;
};
export var isComment = function isComment(node) {
  return node.type === Comment;
};
export var isTemplate = function isTemplate(node) {
  return node.type === TEMPLATE;
};
/**
 * get a valid child node (not fragment nor comment)
 * @param node {VNode} node to be searched
 * @param depth {number} depth to be searched
 */

function getChildren(node, depth) {
  if (isComment(node)) return;

  if (isFragment(node) || isTemplate(node)) {
    return depth > 0 ? getFirstValidNode(node.children, depth - 1) : undefined;
  }

  return node;
}
/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */


export var isValidElementNode = function isValidElementNode(node) {
  return !(isFragment(node) || isComment(node));
};
export var getFirstValidNode = function getFirstValidNode(nodes, maxDepth) {
  if (maxDepth === void 0) {
    maxDepth = 3;
  }

  if (Array.isArray(nodes)) {
    return getChildren(nodes[0], maxDepth);
  } else {
    return getChildren(nodes, maxDepth);
  }
};
export function renderIf(condition, node, props, children, patchFlag, patchProps) {
  return condition ? renderBlock(node, props, children, patchFlag, patchProps) : createCommentVNode('v-if', true);
}
export function renderBlock(node, props, children, patchFlag, patchProps) {
  return openBlock(), createBlock(node, props, children, patchFlag, patchProps);
}
/**
 * todo
 * get normalized props from VNode
 * @param node
 */

export var getNormalizedProps = function getNormalizedProps(node) {
  var _node$type;

  if (!isVNode(node)) {
    warn(SCOPE, 'value must be a VNode');
    return;
  }

  var raw = node.props || {};
  var type = ((_node$type = node.type) == null ? void 0 : _node$type.props) || {};
  var props = {};
  Object.keys(type).forEach(function (key) {
    if (hasOwn(type[key], 'default')) {
      props[key] = type[key].default;
    }
  });
  Object.keys(raw).forEach(function (key) {
    props[camelize(key)] = raw[key];
  });
  return props;
};