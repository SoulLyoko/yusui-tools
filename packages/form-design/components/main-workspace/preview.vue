<script lang="ts">
import { computed, defineComponent, getCurrentInstance, h, ref, resolveComponent } from 'vue'

import { useInjectState } from '../../composables'
import { jsonParse, jsonStringify } from '../../utils'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()!
    const { modelValue } = useInjectState()
    const form = ref({})
    const defaults = ref({})
    const option = computed(() => {
      return jsonParse.bind(proxy)(jsonStringify(modelValue.value))
    })
    const formRef = ref()
    return { form, defaults, option, formRef }
  },
  render() {
    return h(resolveComponent('avue-form'), {
      'ref': 'formRef',
      'modelValue': this.form,
      'option': this.option,
      'defaults': this.defaults,
      'onUpdate:modelValue': (e: any) => (this.form = e),
      'onUpdate:defaults': (e: any) => (this.defaults = e),
    })
  },
})
</script>
