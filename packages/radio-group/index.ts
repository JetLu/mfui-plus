import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import RadioGroup from '../radio/src/radio-group.vue'

RadioGroup.install = (app: App): void => {
  app.component(RadioGroup.name, RadioGroup)
}

const _RadioGroup: SFCWithInstall<typeof RadioGroup> = RadioGroup

export default _RadioGroup
