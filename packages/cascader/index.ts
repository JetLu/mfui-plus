import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Cascader from './src/index.vue'

Cascader.install = (app: App): void => {
  app.component(Cascader.name, Cascader)
}

const _Cascader: SFCWithInstall<typeof Cascader> = Cascader

export default _Cascader
