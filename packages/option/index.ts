import { Option } from '@missfresh/select'
import type { SFCWithInstall } from '@missfresh/utils/types'

const _Option: SFCWithInstall<typeof Option> = Option as SFCWithInstall<
  typeof Option
>

_Option.install = app => {
  app.component(_Option.name, _Option)
}

export default _Option
