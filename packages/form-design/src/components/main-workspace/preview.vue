<template>
  <avue-form v-model="form" v-model:defaults="defaults" :option="option"></avue-form>
</template>

<script lang="ts">
import { ref, computed, getCurrentInstance } from "vue";

import { useInjectState } from "../../composables";
import { jsonStringify, jsonParse } from "../../utils";

// 为了让配置中的事件函数从this中获取到数据
export default {
  setup() {
    const { proxy } = getCurrentInstance()!;
    const { modelValue } = useInjectState();
    const form = ref({});
    const defaults = ref({});
    const option = computed(() => {
      return jsonParse.bind(proxy)(jsonStringify(modelValue.value));
    });
    return { form, defaults, option };
  }
};
</script>
