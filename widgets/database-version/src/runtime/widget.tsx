/** @jsx jsx */
import { AllWidgetProps, jsx } from 'jimu-core'
import { useState, useEffect } from 'react'
import { IMConfig } from '../config'

export default function (props: AllWidgetProps<IMConfig>) {
  const [databaseVersion, setDatabaseVersion] = useState('not available')

  useEffect(() => {
    fetch(props.config.configUrl).then()
      .then((res) => {
        if (!res.ok) {
          console.warn(`Error reading configuration file from ${props.config.configUrl}: `, res.statusText)
          return
        }
        return res.json()
      })
      .then((configData) => {
        if (!configData.databaseVersion) {
          console.error('configuration file improperly formatted: missing databaseVersion property')
          return
        }
        setDatabaseVersion(configData.databaseVersion)
      })
      .catch((err) => {
        console.error('error fetching configuration file: ', err)
      })
  }, [props.config.configUrl])
  return (
    <div className="widget-demo jimu-widget m-2" style={{ fontFamily: 'Avenir Next', fontSize: '13px', color: 'white', verticalAlign: 'middle' }}>
      <span>Database Version: {databaseVersion}</span>
    </div>
  )
}
