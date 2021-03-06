import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Scrollbar from './src/index.vue'

Scrollbar.install = (app: App): void => {
  app.component(Scrollbar.name, Scrollbar)
}

const _Scrollbar: SFCWithInstall<typeof Scrollbar> = Scrollbar

export default _Scrollbar
