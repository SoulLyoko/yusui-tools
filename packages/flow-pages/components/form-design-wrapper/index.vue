<template>
  <avue-form v-if="view" :modelValue="{}" :option="formDesignOptions"></avue-form>
  <FormDesign v-else v-model="formDesignOptions" :baseOption="baseOption"></FormDesign>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FormDesign, jsonStringify, jsonParse } from "@yusui/form-design";

const props = defineProps<{
  modelValue?: string;
  view?: boolean;
  fields?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const formDesignOptions = computed({
  get() {
    return props.modelValue ? jsonParse(props.modelValue) : { menuBtn: false, span: 24 };
  },
  set(val) {
    emit("update:modelValue", jsonStringify(val, { useJson5: false }));
  }
});

const tableFields = computed(() => {
  return props.fields ? JSON.parse(props.fields) : [];
});

const baseOption = computed(() => {
  const common = {
    type: "select",
    dicData: tableFields.value,
    filterable: true,
    allowCreate: true,
    defaultFirstOption: true
  };
  return [
    { ...common, props: { label: "name", value: "name", desc: "comment" } },
    { ...common, props: { label: "comment", value: "comment", desc: "name" } }
  ];
});
</script>
