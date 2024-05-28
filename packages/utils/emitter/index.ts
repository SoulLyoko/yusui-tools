import type { Emitter, EventHandlerMap, EventType } from 'mitt'

import mitt from 'mitt'

export interface EmitterAsync<Events extends Record<EventType, unknown>> extends Emitter<Events> {
  emitAsync: <Key extends keyof Events>(type: Key, event: Events[Key]) => Promise<any>
}

/**
 * Async support for mitt
 *
 * ```
 * const events = mittAsync();
 * events.on('get', async url => fetch(url).then(r=>r.json()));
 * await events.emit('get', '/foo.json');
 * ```
 */
export function mittAsync<Events extends Record<EventType, unknown>>(all?: EventHandlerMap<Events>) {
  const inst = mitt<Events>(all) as EmitterAsync<Events>
  inst.emitAsync = async function (type, e) {
    const typeHandlers = this.all.get(type)
    if (typeHandlers) {
      // @ts-ignore
      for (const f of typeHandlers) await f(e)
    }
    const anyHandlers = this.all.get('*')
    if (anyHandlers) {
      // @ts-ignore
      for (const f of anyHandlers) await f(type, e)
    }
  }
  return inst
}
