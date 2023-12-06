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
