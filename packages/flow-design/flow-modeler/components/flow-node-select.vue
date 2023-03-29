<template>
  <avue-select :dic="nodesDic"></avue-select>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useInjectModelerState } from "../composables";

const props = defineProps<{ filterType?: string | string[]; dic?: any[] }>();

const { lf } = useInjectModelerState();

const nodesDic = computed(() => {
  return lf.value?.graphModel.nodes
    .filter(node => (props.filterType ? props.filterType.includes(node.type) : true))
    .map(node => {
      return { label: node.text.value, value: node.id };
    });
});
</script>
