/**
  Licensing

  Copyright 2021 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import {React, Immutable, DataSourceManager} from 'jimu-core';
import {AllWidgetSettingProps} from 'jimu-for-builder';
// import {JimuMapViewSelector} from 'jimu-ui/advanced/setting-components';
import {MapWidgetSelector} from 'jimu-ui/advanced/setting-components';

import {ArcGISDataSourceTypes} from 'jimu-arcgis';
import { TextInput } from 'jimu-ui';
// import { IMConfig } from "../config";

export default function (props: AllWidgetSettingProps<{}>) {

  const onMapSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  }

  return (
      <div className="sample-use-map-view-setting p-2">
      <MapWidgetSelector onSelect={onMapSelected} useMapWidgetIds={props.useMapWidgetIds}/>      
    </div>
  )
}