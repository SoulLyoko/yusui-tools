<script lang="ts">
import { ref, computed, getCurrentInstance, defineComponent, h, resolveComponent } from "vue";

import { useInjectState } from "../../composables";
import { jsonStringify, jsonParse } from "../../utils";

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()!;
    const { modelValue } = useInjectState();
    const form = ref({});
    const defaults = ref({});
    const option = computed(() => {
      return jsonParse.bind(proxy)(jsonStringify(modelValue.value));
    });
    const formRef = ref();
    return { form, defaults, option, formRef };
  },
  render() {
    return h(resolveComponent("avue-form"), {
      ref: "formRef",
      modelValue: this.form,
      option: this.option,
      defaults: this.defaults,
      onUpdateModelValue: (e: any) => (this.form = e),
      onUpdateDefaults: (e: any) => (this.defaults = e)
    });
  }
});
</script>
