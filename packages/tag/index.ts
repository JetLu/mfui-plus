import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Tag from './src/index.vue'

Tag.install = (app: App): void => {
  app.component(Tag.name, Tag)
}

const _Tag: SFCWithInstall<typeof Tag> = Tag

export default _Tag
