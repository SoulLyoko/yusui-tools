<template>
  <el-drawer v-model="visible" title="预览" size="50%">
    <avue-form :option="option"></avue-form>
  </el-drawer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useVModels } from "@vueuse/core";

import { useInjectState } from "../../composables";
import { transformResouceToFormOption } from "../../utils";

const props = defineProps<{
  visible: boolean;
}>();
const { visible } = useVModels(props);

const { resourceElementList, formOption } = useInjectState();

const option = computed(() => {
  return { ...formOption.value, ...transformResouceToFormOption(resourceElementList.value) };
});
</script>
