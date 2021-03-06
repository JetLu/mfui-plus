import {
  addResizeListener,
  removeResizeListener,
} from '@missfresh/utils/resize-event'

import type { ObjectDirective } from 'vue'

const Resize: ObjectDirective = {
  beforeMount(el, binding) {
    el._handleResize = () => {
      el && binding.value?.()
    }
    addResizeListener(el, el._handleResize)
  },
  beforeUnmount(el) {
    removeResizeListener(el, el._handleResize)
  },
}

export default Resize
