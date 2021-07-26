import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import TimeSelect from './src/time-select.vue'

TimeSelect.install = (app: App): void => {
  app.component(TimeSelect.name, TimeSelect)
}

const _TimeSelect: SFCWithInstall<typeof TimeSelect> = TimeSelect

export default _TimeSelect
