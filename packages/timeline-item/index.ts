import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import TimelineItem from '../timeline/src/item.vue'

TimelineItem.install = (app: App): void => {
  app.component(TimelineItem.name, TimelineItem)
}

const _TimelineItem: SFCWithInstall<typeof TimelineItem> = TimelineItem

export default _TimelineItem
