import type { SetupContext } from 'vue'
import { computed, ref, watch } from 'vue'
import { isString } from '@missfresh/utils/util'
import type { IPopperOptions } from '@missfresh/popper'
import { usePopper } from '@missfresh/popper'
import PopupManager from '@missfresh/utils/popup-manager'
import { EmitType } from '@missfresh/popper/src/use-popper'

export interface IUsePopover extends IPopperOptions {
  width: number | string
}

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export default function usePopover(
  props: IUsePopover,
  ctx: SetupContext<string[]>,
) {
  const zIndex = ref(PopupManager.nextZIndex())
  const width = computed(() => {
    if (isString(props.width)) {
      return props.width as string
    }
    return props.width + 'px'
  })

  const popperStyle = computed(() => {
    return {
      width: width.value,
      zIndex: zIndex.value,
    }
  })

  const popperProps = usePopper(props, ctx as SetupContext<EmitType[]>)

  watch(popperProps.visibility, val => {
    if (val) {
      zIndex.value = PopupManager.nextZIndex()
    }
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT)
  })

  return {
    ...popperProps,
    popperStyle,
  }
}
