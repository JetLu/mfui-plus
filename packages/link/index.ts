import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Link from './src/index.vue'

Link.install = (app: App): void => {
  app.component(Link.name, Link)
}

const _Link: SFCWithInstall<typeof Link> = Link

export default _Link
