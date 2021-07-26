import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Badge from './src/index.vue'

Badge.install = (app: App): void => {
  app.component(Badge.name, Badge)
}

const _Badge: SFCWithInstall<typeof Badge> = Badge

export default _Badge
