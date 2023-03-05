<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane v-for="group in settingsTabs" :key="group.label" :label="group.label" :name="group.prop">
      <avue-form
        v-if="!formReLoading"
        v-model="settingsData"
        class="setting-form"
        :option="{ ...commonFormOption, ...group }"
      ></avue-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { AvueFormGroup } from "@smallwei/avue";

import { ref, watch, nextTick } from "vue";
import { watchDebounced } from "@vueuse/core";
import { get, set, debounce, isEqual, findKey } from "lodash-unified";
import { filterObj } from "@yusui/utils";

import { useInjectState } from "../../composables";
import { form, base, advance } from "../../options";

const state = useInjectState();
const { resourceElementList, activeElement, formOption, recordHistory, getResource } = state;

const commonFormOption = {
  labelPosition: "left" as const,
  labelWidth: 100,
  menuBtn: false,
  span: 24
};

const formReLoading = ref(false);
const activeTab = ref("form");
const settingsTabs = ref<AvueFormGroup[]>([]);
const settingsData = ref({});
const elementPath = ref<string[]>([]);
const updateTimes = ref(0);

watch(
  () => activeElement.value.prop,
  async () => {
    formReLoading.value = true;
    updateTimes.value = 0;
    await nextTick();
    // 找到路径
    const path = findPath(resourceElementList.value, { prop: activeElement.value.prop });
    elementPath.value = path || [];
    // 设置数据
    settingsData.value = path?.length ? get(resourceElementList.value, path) : formOption.value;
    // 设置配置
    const formGroup = { label: "表单属性", prop: "form", column: form };
    const baseGroup = { label: "基本属性", prop: "base", column: base };
    const componentGroup = {
      label: "组件属性",
      prop: "component",
      column: getResource(activeElement.value.name)?.settings ?? []
    };
    const advanceGroup = { label: "高级", prop: "advance", column: advance };
    settingsTabs.value = path?.length ? [baseGroup, componentGroup, advanceGroup] : [formGroup];
    activeTab.value = path?.length ? "base" : "form";
    formReLoading.value = false;
  },
  { immediate: true }
);

const recordHistoryDebounce = debounce(() => recordHistory("property"), 1000);
// 同步更新组件属性
watchDebounced(
  settingsData,
  val => {
    const path = elementPath.value;
    const temp = filterObj(val, [undefined, null, ""], ["$"]);
    if (path.length && !isEqual(temp, get(resourceElementList.value, path))) {
      set(resourceElementList.value, path, temp);
    } else if (!path.length && !isEqual(temp, formOption.value)) {
      formOption.value = temp;
    }
    // 第一次改变属性时不记录
    updateTimes.value && recordHistoryDebounce();
    updateTimes.value++;
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
</script>
