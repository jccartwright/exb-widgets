import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  scientificNamesUrl: string
}

export type IMConfig = ImmutableObject<Config>
