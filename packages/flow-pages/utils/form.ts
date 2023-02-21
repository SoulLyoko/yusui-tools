import type { MaybeRef } from "@vueuse/core";
import type { AvueFormInstance } from "@smallwei/avue";

import { isRef } from "vue";

export function formJsonToOption(json: string) {
  const option = JSON.parse(json, (key, value) => {
    return /=>/.test(String(value)) ? eval(value) : value;
  });
  return option;
}

export function formOptionToJson(option: Object) {
  const json = JSON.stringify(option, (key, value) => {
    return typeof value === "function" ? String(value) : value;
  });
  return json;
}

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
  return new Promise<boolean>((resolve, reject) => {
    const form: AvueFormInstance = isRef(formRef) ? formRef.value : formRef;
    form.validate((valid, done) => {
      if (valid) {
        done();
        resolve(valid);
      } else {
        reject(valid);
      }
    });
  });
}
