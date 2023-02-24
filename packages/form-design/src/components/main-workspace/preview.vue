<template>
  <avue-form :option="option"></avue-form>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useInjectState } from "../../composables";
import { transformResouceToFormOption } from "../../utils";

const { resourceElementList, formOption } = useInjectState();

const option = computed(() => {
  return { ...formOption.value, ...transformResouceToFormOption(resourceElementList.value) };
});
</script>
