<template>
  <avue-form v-if="view" :modelValue="{}" :option="formOptions"></avue-form>
  <avue-form-design v-else ref="formDesignRef" :options="formOptions" :show-github-star="false"></avue-form-design>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { isEqual } from "lodash-unified";

import { formOptionToJson, formJsonToOption } from "../../utils";

const props = defineProps<{
  modelValue?: string;
  view?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const formOptions = ref({});
const formDesignRef = ref();

onMounted(() => {
  watch(
    () => props.modelValue,
    val => {
      const option = formJsonToOption(val || '{"menuBtn":false}');
      const eq = isEqual(option, formDesignRef.value?.widget.option);
      !eq && (formOptions.value = option);
    },
    { immediate: true }
  );
  watch(
    () => formDesignRef.value?.widget.option,
    val => {
      emit("update:modelValue", formOptionToJson(val));
    },
    { deep: true }
  );
});
</script>
