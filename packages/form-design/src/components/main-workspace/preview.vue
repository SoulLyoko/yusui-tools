<template>
  <avue-form v-model="formData" :option="option"></avue-form>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance } from "vue";

import { useInjectState } from "../../composables";
import { transformResouceToFormOption, json5Stringify, json5Parse } from "../../utils";

const { resourceElementList, formOption } = useInjectState();

const formData = ref({});

const { proxy } = getCurrentInstance()!;
const option = computed(() => {
  return json5Parse.bind(proxy)(
    json5Stringify({ ...formOption.value, ...transformResouceToFormOption(resourceElementList.value) })
  );
});
</script>
