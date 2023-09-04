<script lang="ts">
import type { AvueFormOption } from '@smallwei/avue'

import { defineComponent, getCurrentInstance, h, ref, resolveComponent, watchEffect } from 'vue'
import { jsonParse } from '@yusui/form-design'
import { asyncValidate } from '@yusui/flow-pages'

import { useFormDefaults, useInjectState } from '../composables'

// 用defineComponent定义组件，能够在表单配置中通过this获取setup返回的参数
export default defineComponent({
  setup() {
    const { flowDetail, formData: form, detail } = useInjectState()
    const defaults = useFormDefaults(flowDetail.value)
    const { proxy } = getCurrentInstance()!

    const option = ref<AvueFormOption>({})
    watchEffect(() => {
      const { formOption } = flowDetail.value.process ?? {}
      // 给表单配置传递组件实例，即this
      option.value = jsonParse.bind(proxy)(formOption || '{"menuBtn":false}')
      option.value.detail = Boolean(detail.value)
    })

    const formRef = ref()
    function validate() {
      return asyncValidate(formRef)
    }

    return { form, option, defaults, formRef, validate }
  },
  render() {
    return h(resolveComponent('avue-form'), {
      'ref': 'formRef',
      'modelValue': this.form,
      'defaults': this.defaults,
      'option': this.option,
      'class': (this.option as any).class,
      'onUpdate:modelValue': (e: any) => (this.form = e),
      'onUpdate:defaults': (e: any) => (this.defaults = e),
    })
  },
})
</script>
