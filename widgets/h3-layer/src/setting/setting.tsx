/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
// import {JimuMapViewSelector} from 'jimu-ui/advanced/setting-components'
import { MapWidgetSelector, SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { TextInput } from 'jimu-ui'
import { IMConfig } from '../config'

export default function Setting (props: AllWidgetSettingProps<IMConfig>) {
  const onMapSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  const onLayerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('layerName', event.target.value)
    })
  }

  const onSidePanelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    props.onSettingChange({
      id: props.id,
      config: props.config.set('sidePanelId', event.target.value)
    })
  }
  const onSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    props.onSettingChange({
      id: props.id,
      config: props.config.set('sectionId', event.target.value)
    })
  }
  const onDetailsViewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    props.onSettingChange({
      id: props.id,
      config: props.config.set('detailsViewId', event.target.value)
    })
  }
  const onSummaryViewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    props.onSettingChange({
      id: props.id,
      config: props.config.set('summaryViewId', event.target.value)
    })
  }

  return (
    <div className='widget-setting-demo p-3'>
    <SettingSection title="Map">
      <SettingRow>
        <MapWidgetSelector onSelect={onMapSelected} useMapWidgetIds={props.useMapWidgetIds}/>
      </SettingRow>
    </SettingSection>

    <SettingSection title="FeatureLayer Name">
      <SettingRow>
        <TextInput type="text" placeholder="layer name" htmlSize={28} value={props.config.layerName} onChange={onLayerNameChange}/>
      </SettingRow>
    </SettingSection>
    <SettingSection title="Sidepanel">
      <SettingRow>
        <TextInput type="text" placeholder="widgetId" htmlSize={28} value={props.config.sidePanelId} onChange={onSidePanelChange}/>
      </SettingRow>
    </SettingSection>
    <SettingSection title="Section">
      <SettingRow>
        <TextInput type="text" placeholder="sectionId" htmlSize={28} value={props.config.sectionId} onChange={onSectionChange}/>
      </SettingRow>
    </SettingSection>
    <SettingSection title="Details View">
      <SettingRow>
        <TextInput type="text" placeholder="viewId" htmlSize={28} value={props.config.detailsViewId} onChange={onDetailsViewChange}/>
      </SettingRow>
    </SettingSection>
    <SettingSection title="Summary View">
      <SettingRow>
        <TextInput type="text" placeholder="viewId" htmlSize={28} value={props.config.summaryViewId} onChange={onSummaryViewChange}/>
      </SettingRow>
    </SettingSection>

  </div>
  )
}
