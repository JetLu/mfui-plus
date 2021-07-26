import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Timeline from './src/index.vue'

Timeline.install = (app: App): void => {
  app.component(Timeline.name, Timeline)
}

const _Timeline: SFCWithInstall<typeof Timeline> = Timeline

export default _Timeline
