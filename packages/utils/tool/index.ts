import type { Emitter, EventHandlerMap, EventType } from 'mitt'

import mitt from 'mitt'

/**
 * 休眠
 * @param {number} ms 毫秒
 *
 * ```
 * await sleep(1000)
 * ```
 */
export function sleep(ms?: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * try catch的替代方案
 * @param {Promise} promise 传入执行的promise
 * @param {object} errorExt 自定义错误数据对象
 */
export function awaitTo<T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, undefined]
      }
      return [err, undefined]
    })
}
/**
 * usage:
 * ```
 * const [err,res] = await to(getList());
 * if(err) return ElMessage.error(err);
 * ```
 */
export const to = awaitTo

/**
 * 将枚举转换为字典数组
 * @param {object} enumme 枚举对象
 * @param {object} props default: { label: 'label', value: 'value' }
 * @param {string} props.label
 * @param {string} props.value
 */
export function enumToDic<T extends object>(
  enumme?: T,
  props?: { label?: string, value?: string },
): { label?: string, value?: any, [x: string]: any }[] {
  const { label: labelKey = 'label', value: valueKey = 'value' } = props || {}
  return Object.entries(enumme ?? {})
    .map(([key, value]) => ({ [labelKey]: key, [valueKey]: value }))
    .filter(item => Number.isNaN(Number(item[labelKey])))
}

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
