import DatePicker from './src/date-picker'
import type { SFCWithInstall } from '@missfresh/utils/types'

const _DatePicker: SFCWithInstall<typeof DatePicker> =
  DatePicker as SFCWithInstall<typeof DatePicker>

_DatePicker.install = app => {
  app.component(_DatePicker.name, _DatePicker)
}

export default _DatePicker
