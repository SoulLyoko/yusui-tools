import type { UseDictOptions } from './types'

import { merge, pick } from 'lodash-es'

const globalConfigState: Pick<UseDictOptions, 'request'> = {}
export function useDictConfigProvider(config?: typeof globalConfigState) {
  return merge(globalConfigState, pick(config, 'request'))
}
