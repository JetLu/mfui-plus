import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Dialog from './src/index.vue'

Dialog.install = (app: App): void => {
  app.component(Dialog.name, Dialog)
}

const _Dialog: SFCWithInstall<typeof Dialog> = Dialog

export default _Dialog
export { default as useDialog } from './src/useDialog'
