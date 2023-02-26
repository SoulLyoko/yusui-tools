<template>
  <MonacoEditor v-model="code" valueType="object" />
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useInjectState } from "../../composables";
import { transformResouceToFormOption, transformFormOptionToResouce } from "../../utils";
import MonacoEditor from "../monaco-editor/index.vue";

const { resourceElementList, formOption } = useInjectState();

const code = computed({
  get() {
    const option = {
      ...formOption.value,
      ...transformResouceToFormOption(resourceElementList.value)
    };
    return option;
  },
  set(val) {
    formOption.value = val;
    resourceElementList.value = transformFormOptionToResouce(formOption.value);
  }
});
</script>
