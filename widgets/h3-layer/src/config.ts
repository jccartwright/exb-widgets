import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  layerName: string
  sidePanelId: string
  sectionId: string
  summaryViewId: string
  detailsViewId: string
}

export type IMConfig = ImmutableObject<Config>
