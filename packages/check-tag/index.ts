import { App } from 'vue'
import CheckTag from './src/index.vue'
import type { SFCWithInstall } from '@missfresh/utils/types'

CheckTag.install = (app: App): void => {
  app.component(CheckTag.name, CheckTag)
}

const _CheckTag: SFCWithInstall<typeof CheckTag> = CheckTag

export default _CheckTag
