<template>
  <avue-dynamic v-model="dicData" :children="dynamicOption"></avue-dynamic>
</template>

<script setup lang="ts">
import type { AvueFormColumn, DicItem } from "@smallwei/avue";

import { computed } from "vue";

const props = defineProps<{ modelValue?: DicItem[]; children?: AvueFormColumn["children"] }>();
const emit = defineEmits(["update:modelValue"]);

const defaultOption = {
  column: [
    { label: "名称", prop: "label" },
    { label: "值", prop: "value" }
  ]
};

const dynamicOption = computed(() => {
  return props.children ?? defaultOption;
});

const dicData = computed({
  get() {
    return props.modelValue ?? [];
  },
  set(val) {
    emit("update:modelValue", val);
  }
});
</script>
