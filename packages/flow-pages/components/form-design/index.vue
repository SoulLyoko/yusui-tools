<template>
  <avue-form v-if="view" :modelValue="{}" :option="formDesignOptions"></avue-form>
  <FormDesign v-else v-model="formDesignOptions"></FormDesign>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FormDesign, jsonStringify, jsonParse } from "@yusui/form-design";

const props = defineProps<{
  modelValue?: string;
  view?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const formDesignOptions = computed({
  get() {
    return props.modelValue ? jsonParse(props.modelValue) : { menuBtn: false, span: 24 };
  },
  set(val) {
    emit("update:modelValue", jsonStringify(val));
  }
});
</script>
