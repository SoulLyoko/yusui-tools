<script lang="ts">
import type { PropType } from 'vue'
import type { AvueFormOption } from '@smallwei/avue'
import type { FlowDetail } from '../../api'

import { defineComponent, getCurrentInstance, h, ref, resolveComponent, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { jsonParse } from '@yusui/form-design'

import { asyncValidate } from '../../utils'
import { useFormDefaults } from '../composables'

export default defineComponent({
  props: {
    modelValue: { type: Object, default: () => ({}) },
    flowDetail: { type: Object as PropType<FlowDetail>, default: () => ({}) },
    detail: { type: Boolean },
  },
  setup(props) {
    const { modelValue: form } = useVModels(props, undefined, { passive: true, deep: true })
    const defaults = useFormDefaults(props.flowDetail)
    const { proxy } = getCurrentInstance()!

    const option = ref<AvueFormOption>({})
    watchEffect(() => {
      const { formOption } = props.flowDetail.process ?? {}
      option.value = jsonParse.bind(proxy)(formOption || '{"menuBtn":false}')
      option.value.detail = Boolean(props.detail)
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
      'onUpdate:modelValue': (e: any) => (this.form = e),
      'onUpdate:defaults': (e: any) => (this.defaults = e),
    })
  },
})
</script>
