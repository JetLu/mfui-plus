<script lang="ts">
import {
  defineComponent,
  Fragment,
  createTextVNode,
  renderSlot,
  toDisplayString,
  createCommentVNode,
  withDirectives,
  Teleport,
  h,
} from 'vue'
import ElPopper from '@missfresh/popper'
import { defaultProps, Effect } from '@missfresh/popper'
import { renderPopper, renderTrigger, renderArrow } from '@missfresh/popper'
import { ClickOutside } from '@missfresh/directives'
import { warn } from '@missfresh/utils/error'
import { renderIf, PatchFlags } from '@missfresh/utils/vnode'
import usePopover, { SHOW_EVENT, HIDE_EVENT } from './usePopover'

import type { PropType } from 'vue'
import type { TriggerType } from '@missfresh/popper'

const emits = [
  'update:visible',
  'after-enter',
  'after-leave',
  SHOW_EVENT,
  HIDE_EVENT,
]
const NAME = 'ElPopover'

const _hoist = { key: 0, class: 'el-popover__title', role: 'title' }

export default defineComponent({
  name: NAME,
  components: {
    ElPopper,
  },
  props: {
    ...defaultProps,
    content: {
      type: String,
    },
    trigger: {
      type: String as PropType<TriggerType>,
      default: 'click',
    },
    title: {
      type: String,
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
    width: {
      type: [String, Number],
      default: 150,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    tabindex: [String, Number],
  },
  emits,
  setup(props, ctx) {
    if (
      process.env.NODE_ENV !== 'production' &&
      props.visible &&
      !ctx.slots.reference
    ) {
      warn(
        NAME,
        `
        You cannot init popover without given reference
      `,
      )
    }
    const states = usePopover(props, ctx)

    return states
  },
  render() {
    const { $slots } = this
    const trigger = $slots.reference ? $slots.reference() : null

    const title = renderIf(
      this.title,
      'div',
      _hoist,
      toDisplayString(this.title),
      PatchFlags.TEXT,
    )

    const content = renderSlot($slots, 'default', {}, () => [
      createTextVNode(toDisplayString(this.content), PatchFlags.TEXT),
    ])

    const {
      events,
      onAfterEnter,
      onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperStyle,
      popperId,
      popperClass,
      showArrow,
      transition,
      visibility,
      tabindex,
    } = this

    const kls = [
      this.content ? 'el-popover--plain' : '',
      'el-popover',
      popperClass,
    ].join(' ')

    let popover = renderPopper(
      {
        effect: Effect.LIGHT,
        name: transition,
        popperClass: kls,
        popperStyle: popperStyle,
        popperId,
        visibility,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        stopPopperMouseEvent: false,
      },
      [title, content, renderArrow(showArrow)],
    )

    // when user uses popover directively, trigger will be null so that we only
    // render a popper window for displaying contents
    const _trigger = trigger
      ? renderTrigger(trigger, {
        ariaDescribedby: popperId,
        ref: 'triggerRef',
        tabindex,
        ...events,
      })
      : createCommentVNode('v-if', true)

    return h(Fragment, null, [
      this.trigger === 'click'
        ? withDirectives(_trigger, [[ClickOutside, this.hide]])
        : _trigger,
      h(
        Teleport as any,
        {
          disabled: !this.appendToBody,
          to: 'body',
        },
        [popover],
      ),
    ])
  },
})
</script>
