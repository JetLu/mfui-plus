import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import PageHeader from './src/index.vue'

PageHeader.install = (app: App): void => {
  app.component(PageHeader.name, PageHeader)
}

const _PageHeader: SFCWithInstall<typeof PageHeader> = PageHeader

export default _PageHeader
