import { App } from 'vue'
import type { SFCWithInstall } from '@missfresh/utils/types'
import Autocomplete from './src/index.vue'

Autocomplete.install = (app: App): void => {
  app.component(Autocomplete.name, Autocomplete)
}

const _Autocomplete: SFCWithInstall<typeof Autocomplete> = Autocomplete

export default _Autocomplete
