import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Backtop from './src/index.vue'

Backtop.install = (app: App): void => {
  app.component(Backtop.name, Backtop)
}

const _Backtop: SFCWithInstall<typeof Backtop> = Backtop

export default _Backtop
