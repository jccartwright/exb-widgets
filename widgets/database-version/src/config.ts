import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  configUrl: string
}

export type IMConfig = ImmutableObject<Config>
