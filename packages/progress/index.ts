import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Progress from './src/index.vue'

Progress.install = (app: App): void => {
  app.component(Progress.name, Progress)
}

const _Progress: SFCWithInstall<typeof Progress> = Progress

export default _Progress
