/**
 * 休眠
 * usage:
 * ```
 * await sleep(1000)
 * ```
 * @param {Number} ms 毫秒
 * @returns {Promise}
 */
export function sleep(ms?: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * try catch的替代方案
 * @param {Promise} promise 传入执行的promise
 * @param {Object} errorExt 自定义错误数据对象
 * @returns {Promise}
 */
export function awaitTo<T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }
      return [err, undefined];
    });
}
/**
 * usage:
 * ```
 * const [err,res] = await to(getList());
 * if(err) return ElMessage.error(err);
 * ```
 */
export const to = awaitTo;
