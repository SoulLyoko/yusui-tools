<script lang="ts">
import type { AvueFormOption } from '@smallwei/avue'

import { computed, defineComponent, getCurrentInstance, h, ref, resolveComponent } from 'vue'

import { useInjectState } from '../../composables'
import { jsonParse, jsonStringify } from '../../utils'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()!
    const { modelValue, deviceType } = useInjectState()

    const formRef = ref()
    const form = ref({})
    const defaults = ref({})
    const option = computed(() => {
      const parsedOption = jsonParse.bind(proxy)(jsonStringify(modelValue.value)) as AvueFormOption
      if (parsedOption && deviceType.value === 'mobile') {
        parsedOption.span = 24
        parsedOption.column?.forEach(c => c.span = 24)
        parsedOption.group?.forEach((g) => {
          g.span = 24
          g.column?.forEach(c => c.span = 24)
        })
      }
      return parsedOption
    })

    function onSubmit(form: any, done: () => void) {
      console.log(form)
      done?.()
    }

    return { form, defaults, option, formRef, onSubmit }
  },
  render() {
    return h(resolveComponent('avue-form'), {
      'ref': 'formRef',
      'modelValue': this.form,
      'option': this.option,
      'defaults': this.defaults,
      'onUpdate:modelValue': (e: any) => (this.form = e),
      'onUpdate:defaults': (e: any) => (this.defaults = e),
      'onSubmit': this.onSubmit,
    })
  },
})
</script>
