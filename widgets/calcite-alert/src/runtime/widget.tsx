import { AllWidgetProps, React, IMState, FormattedMessage, jimuHistory } from 'jimu-core'
import { useState } from 'react'
import { IMConfig } from '../config'
import defaultMessage from './translations/default'
import { CalciteButton, CalciteIcon, CalciteSlider, CalciteAlert } from 'calcite-components'
import reactiveUtils from 'esri/core/reactiveUtils'

interface ExtraProps {
  locale: string
}

export default function Widget (props: AllWidgetProps<IMConfig> & ExtraProps) {
  const [alertVisible, setAlertVisible] = useState(false)
  console.log({ alertVisible })

  function buttonHandler(e) {
    console.log('setting alertVisible to true')
    setAlertVisible(true)
  }

  return (
    <>
    <CalciteAlert
      active={alertVisible}
      autoDismiss={true}
      autoDismissDuration='fast'
      label={'Hello World'}
      placement="top-end"
    >
      <div slot="title">Alert title</div>
      <div slot="message">Message lorem ipsum</div><a slot="link" href="#">Link slot</a>
    </CalciteAlert>

    <CalciteButton onClick={buttonHandler}>Show Alert</CalciteButton>
    </>
  )
}

Widget.mapExtraStateProps = (state: IMState, ownProps: AllWidgetProps<IMConfig>): ExtraProps => {
  return {
    locale: state.appContext.locale
  }
}
