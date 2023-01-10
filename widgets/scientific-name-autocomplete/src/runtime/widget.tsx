/** @jsx jsx */
import {
  React,
  AllWidgetProps,
  jsx,
  QueriableDataSource,
  DataSourceComponent,
  SqlQueryParams,
  MessageManager,
  DataSourceFilterChangeMessage
} from 'jimu-core'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { IMConfig } from '../config'

/**
 * construct SQL clause based on name selection
  * Note that other filter criteria are managed independently by the Filter widget
  */
function getQuery (selectedName): SqlQueryParams {
  if (selectedName) {
    return ({ where: `ScientificName = '${selectedName}'` })
  } else {
    return null
  }
}

export default function (props: AllWidgetProps<IMConfig>) {
  const [names, setNames] = useState<string[]>([])
  const [selectedName, setSelectedName] = useState<string|null>(null)
  const [dataSource, setDataSource] = useState<QueriableDataSource|null>(null)

  useEffect(() => {
    fetch(props.config.scientificNamesUrl).then()
      .then((res) => {
        if (!res.ok) {
          console.warn(`Error reading configuration file from ${props.config.scientificNamesUrl}: `, res.statusText)
          return
        }
        return res.json()
      })
      .then((nameslist) => {
        if (!nameslist) {
          console.error('configuration file improperly formatted: no names found')
          return
        }
        if (nameslist.length > 0) {
          console.log(`${nameslist.length} unique scientific names loaded from ${props.config.scientificNamesUrl}`)
        }
        setNames(nameslist)
      })
      .catch((err) => {
        console.error('error fetching configuration file: ', err)
      })
  }, [props.config.scientificNamesUrl])

  useEffect(() => {
    if (!dataSource) {
      // cannot update queryParams w/o DataSource
      // console.warn('scientific-name-autocomplete: no DataSource - cannot update queryParams')
      return
    }
    const q = getQuery(selectedName)
    dataSource?.updateQueryParams(q, props.id)
    MessageManager.getInstance().publishMessage(new DataSourceFilterChangeMessage(props.id, dataSource.id))
  }, [selectedName, dataSource, props.id])

  function nameChangeHandler (evt: React.MouseEvent<HTMLButtonElement>, value: string) {
    setSelectedName(value)
  }

  // runs once
  function onDataSourceCreated (ds: QueriableDataSource) {
    if (ds) {
      setDataSource(ds)
    } else {
      console.error('unable to create DataSource')
    }
  }

  const filterOptions = createFilterOptions({
    matchFrom: 'start'
    // limit: 5
  })

  const listboxProps = {
    sx: {
      minHeight: 200,
      maxHeight: 200
    }
  }

  return (
    <div className="widget-demo jimu-widget m-2">
      <DataSourceComponent
        useDataSource={props.useDataSources?.[0]}
        widgetId={props.id}
        onDataSourceCreated={onDataSourceCreated}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        filterOptions={filterOptions}
        options={names}
        sx={{ width: 280 }}
        renderInput={(params) => <TextField {...params} label="Scientific Name" />}
        onChange={nameChangeHandler}
        size="small"
        ListboxProps={listboxProps }
      />
    </div>
  )
}
