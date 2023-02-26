<template>
  <avue-form v-if="!formReLoading" v-model="settingData" :option="settingOption"></avue-form>
</template>

<script setup lang="ts">
import type { AvueFormOption } from "@smallwei/avue";

import { ref, watch, nextTick } from "vue";
import { watchDebounced } from "@vueuse/core";
import { get, set, debounce, isEqual, findKey } from "lodash-unified";
import { filterObj } from "@yusui/utils";

import { useInjectState } from "../../composables";
import { form, base } from "../../options";

const { resources, resourceElementList, activeElement, formOption, recordHistory } = useInjectState();

const formReLoading = ref(false);
const settingOption = ref<AvueFormOption>({});
const settingData = ref({});
const currentElementPath = ref<string[]>([]);
const updateTimes = ref(-1);
watch(
  () => activeElement.value.prop,
  async () => {
    formReLoading.value = true;
    updateTimes.value = -1;
    await nextTick();
    // 找到路径
    const path = findPath(resourceElementList.value, { prop: activeElement.value.prop });
    currentElementPath.value = path || [];
    // 设置数据
    settingData.value = path?.length ? get(resourceElementList.value, path) : formOption.value;
    // 设置配置
    const formGroup = { label: "表单属性", column: form };
    const baseGroup = { label: "基本属性", column: base };
    const componentGroup = { label: "组件属性", column: findSettings() };
    settingOption.value = {
      labelPosition: "left",
      labelWidth: 100,
      menuBtn: false,
      span: 24,
      group: path?.length ? [baseGroup, componentGroup] : [formGroup]
    };
    formReLoading.value = false;
  },
  { immediate: true }
);
const recordHistoryDebounce = debounce(() => recordHistory("property"), 1000);
// 同步更新组件属性
watchDebounced(
  settingData,
  val => {
    const path = currentElementPath.value;
    const temp = filterObj(val, [undefined, null, ""], ["$"]);
    if (path.length && !isEqual(temp, get(resourceElementList.value, path))) {
      set(resourceElementList.value, path, temp);
    } else if (!path.length && !isEqual(temp, formOption.value)) {
      formOption.value = temp;
    }
    updateTimes.value++;
    if (updateTimes.value) {
      recordHistoryDebounce();
    }
  },
  { deep: true, debounce: 100 }
);

function findPath(object: any, predicate: any): string[] | undefined {
  if (typeof object !== "object") return;
  let find = findKey(object, predicate);
  if (find) return [find];
  for (const key in object) {
    let result = findPath(object[key], predicate);
    if (result) return [key].concat(result);
  }
  return;
}

function findSettings() {
  const { type, component } = activeElement.value;
  return (
    resources.value.find(item => {
      return (type && item.type === type) || (component && item.component === component);
    })?.settings ?? []
  );
}
</script>
