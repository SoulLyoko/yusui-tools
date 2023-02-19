<template>
  <avue-form v-if="activeElement.path" v-model="elementData" :option="elementOption"></avue-form>
  <avue-form v-else v-model="formData" :option="formOption"></avue-form>
</template>

<script setup lang="ts">
import type { AvueFormOption } from "@smallwei/avue";

import { computed } from "vue";
import { get, set, debounce, isEqual } from "lodash-es";

import { useInjectState } from "../../composables";
import * as options from "./options";

const { resourceElementList, activeElement, formOption: formData, recordHistory } = useInjectState();

const formOption = computed(() => {
  return {
    menuBtn: false,
    labelWidth: 100,
    span: 24,
    group: [{ label: "表单属性", column: options.form }]
  };
});

const elementOption = computed(() => {
  const baseGroup = { label: "基本属性", column: options.base };
  const componentGroup = { label: "组件属性", column: options[activeElement.value.type as keyof typeof options] ?? [] };
  const group = [];
  const { type } = activeElement.value;
  if (type) {
    group.push(baseGroup, componentGroup);
  }
  return {
    menuBtn: false,
    labelWidth: 100,
    span: 24,
    group
  } as AvueFormOption;
});

const recordHistoryDebounce = debounce(() => recordHistory("property"), 1000);
const elementData = computed({
  get() {
    const { path } = activeElement.value;
    return path ? get(resourceElementList.value, path) : {};
  },
  set(val) {
    const { path } = activeElement.value;
    if (!path) return;
    const temp: any = {};
    Object.entries(val).forEach(([k, v]) => {
      if (!k.includes("$")) {
        temp[k] = v;
      }
    });
    if (isEqual(temp, get(resourceElementList.value, path))) return;
    set(resourceElementList.value, path, temp);
    recordHistoryDebounce();
  }
});
</script>

<style lang="scss" scoped></style>
