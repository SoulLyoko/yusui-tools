<template>
  <avue-form-design ref="formDesignRef" :options="formOptions" :show-github-star="false"></avue-form-design>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

import { formOptionToJson, formJsonToOption } from "../../utils";

const props = defineProps<{
  modelValue?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const formOptions = ref({});
const formDesignRef = ref();
onMounted(() => {
  formOptions.value = formJsonToOption(props.modelValue || '{"menuBtn":false}');
  watch(
    () => formDesignRef.value?.widget.option,
    val => {
      emit("update:modelValue", formOptionToJson(val));
    },
    { deep: true }
  );
});
</script>

<style lang="scss" scoped></style>
