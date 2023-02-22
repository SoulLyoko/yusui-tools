<template>
  <avue-form v-if="!formReLoading" v-model="settingData" :option="settingOption"></avue-form>
</template>

<script setup lang="ts">
import type { AvueFormOption } from "@smallwei/avue";

import { computed, ref, watch, nextTick } from "vue";
import { get, set, debounce, isEqual } from "lodash-unified";
import { filterObj } from "@yusui/utils";

import { useInjectState } from "../../composables";
import * as options from "./options";

const { resources, resourceElementList, activeElement, formOption, recordHistory } = useInjectState();

const formReLoading = ref(false);
const settingOption = ref<AvueFormOption>({});

watch(
  () => activeElement.value.prop,
  async () => {
    formReLoading.value = true;
    await nextTick();
    const formGroup = { label: "表单属性", column: options.form };
    const baseGroup = { label: "基本属性", column: options.base };
    const componentGroup = { label: "组件属性", column: findSettings() };
    await nextTick();
    formReLoading.value = false;
    settingOption.value = {
      labelPosition: "left",
      menuBtn: false,
      span: 24,
      group: activeElement.value.prop ? [baseGroup, componentGroup] : [formGroup]
    };
  },
  { immediate: true }
);

const currentElementPath = computed(() => {
  let path: (string | number)[] = [];
  resourceElementList.value.forEach((item, index) => {
    if (item.prop === activeElement.value.prop) {
      path = [index];
    } else if (item.type === "group") {
      item.column?.forEach((e, i) => {
        if (e.prop === activeElement.value.prop) {
          path = [index, "column", i];
        }
      });
    } else if (item.type === "dynamic") {
      item.column?.forEach((e, i) => {
        if (e.prop === activeElement.value.prop) {
          path = [index, "children", "column", i];
        }
      });
    }
  });
  return path;
});

// 同步更新组件属性
const settingData = ref({});
const recordHistoryDebounce = debounce(() => recordHistory("property"), 1000);
watch(
  currentElementPath,
  path => {
    settingData.value = path.length ? get(resourceElementList.value, path) : formOption.value;
  },
  { immediate: true }
);
watch(
  settingData,
  val => {
    const path = currentElementPath.value;
    const temp = filterObj(val, [undefined, null, ""], ["$"]);
    if (path.length && !isEqual(temp, get(resourceElementList.value, path))) {
      set(resourceElementList.value, path, temp);
      recordHistoryDebounce();
    } else if (!path.length && !isEqual(temp, formOption.value)) {
      formOption.value = temp;
      recordHistoryDebounce();
    }
  },
  { deep: true }
);

function findSettings() {
  const { type, component } = activeElement.value;
  return (
    resources.value.find(item => {
      return (type && item.type === type) || (component && item.component === component);
    })?.settings ?? []
  );
}
</script>
