<template>
  <avue-select :dic="dic"></avue-select>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useInjectState } from "../../composables";
import { base } from "../../options";

const props = defineProps<{ tableData?: { row: any }; dic?: any }>();

const { resourceElementList, getResource } = useInjectState();

const dic = computed(() => {
  const findElement = resourceElementList.value.find(e => e.prop === props.tableData?.row?.field);
  const settings = getResource(findElement?.name)?.settings ?? [];
  return [...base, ...settings].map(e => ({ label: e.label, value: e.prop, desc: e.prop }));
});
</script>
