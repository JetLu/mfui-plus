import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import ImageViewer from './src/index.vue'

ImageViewer.install = (app: App): void => {
  app.component(Image.name, Image)
}

const _ImageViewer: SFCWithInstall<typeof ImageViewer> = ImageViewer

export default _ImageViewer
