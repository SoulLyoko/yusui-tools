<template>
  <el-input v-model="code" type="textarea" :autosize="{ minRows: 30 }"></el-input>
</template>

<script setup lang="ts" name="">
import { computed } from "vue";

import { useInjectState } from "../../composables";
import {
  formOptionStringify,
  formOptionParse,
  transformResouceToFormOption,
  transformFormOptionToResouce
} from "../../utils";

const { resourceElementList, formOption } = useInjectState();

const code = computed({
  get() {
    const option = {
      ...formOption.value,
      ...transformResouceToFormOption(resourceElementList.value)
    };
    return formOptionStringify(option);
  },
  set(val) {
    formOption.value = formOptionParse(val);
    resourceElementList.value = transformFormOptionToResouce(formOption.value);
  }
});
</script>
