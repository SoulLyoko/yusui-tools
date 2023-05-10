import type { MaybeRef } from '@vueuse/core'
import type { AvueFormInstance } from '@smallwei/avue'

import { unref } from 'vue'

/**
 * 将avue-form的表单校验转为异步函数
 * usage:
 * ```
 * const formRef = ref();
 * async function onSubmit(){
 *    const valid = await asyncValidate(formRef);
 *    console.log(valid); // true
 * }
 * ```
 */
export function asyncValidate(formRef: MaybeRef<any>) {
  return new Promise<string>((resolve, reject) => {
    const formInstance: AvueFormInstance = unref(formRef)
    formInstance.validate((valid, done, msg) => {
      if (valid) {
        done()
        resolve(msg)
      }
      else {
        reject(msg)
      }
    })
  })
}
