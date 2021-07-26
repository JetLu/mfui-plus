import Select from './src/select.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}

export default Select as SFCWithInstall<typeof Select>
