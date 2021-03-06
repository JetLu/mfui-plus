import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Rate from './src/index.vue'

Rate.install = (app: App): void => {
  app.component(Rate.name, Rate)
}

const _Rate: SFCWithInstall<typeof Rate> = Rate

export default _Rate
