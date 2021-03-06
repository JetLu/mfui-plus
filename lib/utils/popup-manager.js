import isServer from "./isServer";
import * as configs from "./config";
import { addClass, removeClass, on } from "./dom";
import { EVENT_CODE } from "./aria";

var onTouchMove = function onTouchMove(e) {
  e.preventDefault();
  e.stopPropagation();
};

var onModalClick = function onModalClick() {
  PopupManager == null ? void 0 : PopupManager.doOnModalClick();
};

var hasModal = false;
var zIndex;

var getModal = function getModal() {
  if (isServer) return;
  var modalDom = PopupManager.modalDom;

  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;
    on(modalDom, 'touchmove', onTouchMove);
    on(modalDom, 'click', onModalClick);
  }

  return modalDom;
};

var instances = {};
var PopupManager = {
  modalFade: true,
  modalDom: undefined,
  zIndex: zIndex,
  getInstance: function getInstance(id) {
    return instances[id];
  },
  register: function register(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },
  deregister: function deregister(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },
  nextZIndex: function nextZIndex() {
    return ++PopupManager.zIndex;
  },
  modalStack: [],
  doOnModalClick: function doOnModalClick() {
    var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem) return;
    var instance = PopupManager.getInstance(topItem.id);

    if (instance && instance.closeOnClickModal.value) {
      instance.close();
    }
  },
  openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
    if (isServer) return;
    if (!id || zIndex === undefined) return;
    this.modalFade = modalFade;
    var modalStack = this.modalStack;

    for (var i = 0, j = modalStack.length; i < j; i++) {
      var item = modalStack[i];

      if (item.id === id) {
        return;
      }
    }

    var modalDom = getModal();
    addClass(modalDom, 'v-modal');

    if (this.modalFade && !hasModal) {
      addClass(modalDom, 'v-modal-enter');
    }

    if (modalClass) {
      var classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(function (item) {
        return addClass(modalDom, item);
      });
    }

    setTimeout(function () {
      removeClass(modalDom, 'v-modal-enter');
    }, 200);

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = String(zIndex);
    }

    modalDom.tabIndex = 0;
    modalDom.style.display = '';
    this.modalStack.push({
      id: id,
      zIndex: zIndex,
      modalClass: modalClass
    });
  },
  closeModal: function closeModal(id) {
    var modalStack = this.modalStack;
    var modalDom = getModal();

    if (modalStack.length > 0) {
      var topItem = modalStack[modalStack.length - 1];

      if (topItem.id === id) {
        if (topItem.modalClass) {
          var classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach(function (item) {
            return removeClass(modalDom, item);
          });
        }

        modalStack.pop();

        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (var i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, 'v-modal-leave');
      }

      setTimeout(function () {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = 'none'; // off(modalDom, 'touchmove', onTouchMove)
          // off(modalDom, 'click', onModalClick)

          PopupManager.modalDom = undefined;
        }

        removeClass(modalDom, 'v-modal-leave');
      }, 200);
    }
  }
};
Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get: function get() {
    if (zIndex === undefined) {
      zIndex = configs.getConfig('zIndex') || 2000;
    }

    return zIndex;
  },
  set: function set(value) {
    zIndex = value;
  }
});

var getTopPopup = function getTopPopup() {
  if (isServer) return;

  if (PopupManager.modalStack.length > 0) {
    var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup) return;

    var _instance = PopupManager.getInstance(topPopup.id);

    return _instance;
  }
};

if (!isServer) {
  // handle `esc` key when the popup is shown
  on(window, 'keydown', function (event) {
    if (event.code === EVENT_CODE.esc) {
      var topPopup = getTopPopup();

      if (topPopup && topPopup.closeOnPressEscape.value) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
      }
    }
  });
}

export default PopupManager;