import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import CarouselItem from '../carousel/src/item.vue'

CarouselItem.install = (app: App): void => {
  app.component(CarouselItem.name, CarouselItem)
}

const _CarouselItem: SFCWithInstall<typeof CarouselItem> = CarouselItem

export default _CarouselItem
