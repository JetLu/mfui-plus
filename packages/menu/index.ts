import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Menu from './src/menu.vue'

Menu.install = (app: App): void => {
  app.component(Menu.name, Menu)
}

const _Menu: SFCWithInstall<typeof Menu> = Menu

export default _Menu
