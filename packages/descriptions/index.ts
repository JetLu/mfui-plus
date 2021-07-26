import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Descriptions from './src/index.vue'

Descriptions.install = (app: App): void => {
  app.component(Descriptions.name, Descriptions)
}

const _Descriptions: SFCWithInstall<typeof Descriptions> = Descriptions

export default _Descriptions
