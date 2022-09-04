/** @jsx jsx */
import {
  React,
  jsx,
  ActionSettingProps,
  ImmutableObject
} from 'jimu-core'

interface States {}

interface Config {}

export type IMConfig = ImmutableObject<Config>

class MessageHandlerActionSetting extends React.PureComponent<ActionSettingProps<IMConfig>, States> {
  render () {
    return <div>
      no configuration options available
    </div>
  }
}

export default MessageHandlerActionSetting
