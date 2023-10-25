import { get } from 'lodash-unified'

/** 精确加法 */
export function accAdd(num1: number | string, num2: number | string) {
  const r1 = num1.toString().split('.')[1]?.length ?? 0
  const r2 = num2.toString().split('.')[1]?.length ?? 0
  const maxLength = Math.max(r1, r2)
  const multiple = 10 ** maxLength
  num1 = Number(num1.toString().replace('.', '') + '0'.repeat(maxLength - r1))
  num2 = Number(num2.toString().replace('.', '') + '0'.repeat(maxLength - r2))
  return (num1 + num2) / multiple
}

/** 精确减法 */
export function accSub(num1: number | string, num2: number | string) {
  const r1 = num1.toString().split('.')[1]?.length ?? 0
  const r2 = num2.toString().split('.')[1]?.length ?? 0
  const maxLength = Math.max(r1, r2)
  const multiple = 10 ** maxLength
  num1 = Number(num1.toString().replace('.', '') + '0'.repeat(maxLength - r1))
  num2 = Number(num2.toString().replace('.', '') + '0'.repeat(maxLength - r2))
  return (num1 - num2) / multiple
}

/** 精确乘法 */
export function accMul(num1: number | string, num2: number | string) {
  const r1 = num1.toString().split('.')[1]?.length ?? 0
  const r2 = num2.toString().split('.')[1]?.length ?? 0
  const multiple = 10 ** (r1 + r2)
  num1 = Number(num1.toString().replace('.', ''))
  num2 = Number(num2.toString().replace('.', ''))
  return (num1 * num2) / multiple
}

/** 精确除法 */
export function accDiv(num1: number | string, num2: number | string) {
  const r1 = num1.toString().split('.')[1]?.length ?? 0
  const r2 = num2.toString().split('.')[1]?.length ?? 0
  const multiple = 10 ** (r2 - r1)
  num1 = Number(num1.toString().replace('.', ''))
  num2 = Number(num2.toString().replace('.', ''))
  return accMul(num1 / num2, multiple)
}

/**
 * 精确运算链式调用
 * Usage:
 * ```
 * const result = accChain(0.1).add(0.2).sub(0.2).mul(3).div(0.1).value();
 * console.log(result); // (0.1+0.2-0.2)*3/0.1=3
 * ```
 */
export function accChain(num: number | string) {
  class AccChain {
    result: number
    constructor(num: number | string) {
      this.result = Number(num)
    }

    /** 加法 */
    add(num: number | string) {
      this.result = accAdd(this.result, num)
      return this
    }

    /** 减法 */
    sub(num: number | string) {
      this.result = accSub(this.result, num)
      return this
    }

    /** 乘法 */
    mul(num: number | string) {
      this.result = accMul(this.result, num)
      return this
    }

    /** 除法 */
    div(num: number | string) {
      this.result = accDiv(this.result, num)
      return this
    }

    /** 获取计算结果 */
    value() {
      return this.result
    }
  }
  return new AccChain(num)
}

/** 精确求和 */
export function accSum(list: (number | string)[]) {
  return list.reduce((prev, curr) => accAdd(prev, curr || 0), 0)
}

/** 精确求和,根据属性值 */
export function accSumBy<T>(list: T[], propPath: string) {
  return list.reduce((prev, curr) => accAdd(prev, (get(curr, propPath) || 0) as number), 0)
}

/** 精确求平均值 */
export function accMean(list: (number | string)[]) {
  return accDiv(accSum(list), list.length)
}

/** 精确求平均值,根据属性值 */
export function accMeanBy<T>(list: T[], propPath: string) {
  return accDiv(accSumBy(list, propPath), list.length)
}
