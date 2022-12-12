import {
  AbstractMessageAction,
  MessageType,
  Message,
  getAppStore,
  appActions,
  MessageDescription,
  ExtentChangeMessage
} from 'jimu-core'

export default class ExtentChangeAction extends AbstractMessageAction {
  filterMessageDescription (messageDescription: MessageDescription): boolean {
    // TODO limit to DataSourceFilterChangeMessage, ExtentChangeMessage, DataRecordsSelectionChange
    return true
  }

  filterMessage (message: Message): boolean {
    // TODO limit to DataSourceFilterChangeMessage, ExtentChangeMessage, DataRecordsSelectionChange
    return true
  }

  //set action setting uri
  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/extent-change-action-setting'
  }

  onExecute (message: Message, actionConfig?: any): Promise<boolean> | boolean {
    switch (message.type) {
      case MessageType.ExtentChange:
        console.log('MessageHandlerAction: got ExtentChangeMessage', message, actionConfig)
        const extentChangeMessage = message as ExtentChangeMessage
        // trigger an update for the widget when Extent is different from previous.
        // Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)
        getAppStore().dispatch(appActions.widgetStatePropChange(
          this.widgetId,
          'extent',
          {
            xmin: extentChangeMessage.extent.xmin,
            ymin: extentChangeMessage.extent.ymin,
            xmax: extentChangeMessage.extent.xmax,
            ymax: extentChangeMessage.extent.ymax
          })
        )
        break
    }

    return true
  }
}
