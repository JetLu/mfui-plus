import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import ButtonGroup from '../button/src/button-group.vue'

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

const _ButtonGroup: SFCWithInstall<typeof ButtonGroup> = ButtonGroup

export default _ButtonGroup
