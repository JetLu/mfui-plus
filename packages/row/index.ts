import Row from '../col/src/row'
import type { SFCWithInstall } from '@missfresh/utils/types'

const _Row: SFCWithInstall<typeof Row> = Row as SFCWithInstall<typeof Row>

_Row.install = app => {
  app.component(_Row.name, _Row)
}

export default _Row
