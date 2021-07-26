import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Card from './src/index.vue'

Card.install = (app: App): void => {
  app.component(Card.name, Card)
}

const _Card: SFCWithInstall<typeof Card> = Card

export default _Card
