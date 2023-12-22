import type { SetupContext } from 'vue'

export type EmitFn<E> = SetupContext<E>['emit']
