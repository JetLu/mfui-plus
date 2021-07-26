import Message from './src/message'
import type { SFCWithInstall } from '@missfresh/utils/types'

const _Message: SFCWithInstall<typeof Message> = Message as SFCWithInstall<
  typeof Message
>

_Message.install = app => {
  app.config.globalProperties.$message = _Message
}

export default _Message
