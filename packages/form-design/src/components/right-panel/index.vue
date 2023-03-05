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
const { elementTree, activeElement, recordHistory, getResource } = state;

const commonFormOption = {
  labelPosition: "left" as const,
  labelWidth: 100,
  menuBtn: false,
  span: 24
};

const formReLoading = ref(false);
const activeTab = ref("form");
const settingsTabs = ref<AvueFormGroup[]>([]);
const settingsData = ref<any>({});
const updateTimes = ref(0);

watch(
  () => activeElement.value.id,
  async () => {
    formReLoading.value = true;
    updateTimes.value = 0;
    await nextTick();
    const formGroup = { label: "表单属性", prop: "form", column: form };
    const baseGroup = { label: "基本属性", prop: "base", column: base };
    const advanceGroup = { label: "高级", prop: "advance", column: advance };
    const componentGroup = {
      label: "组件属性",
      prop: "component",
      column: getResource(activeElement.value.name)?.settings ?? []
    };
    if (!activeElement.value.name || activeElement.value.name === "form") {
      settingsTabs.value = [formGroup];
    } else {
      settingsTabs.value = [baseGroup, componentGroup, advanceGroup];
    }
    activeTab.value = settingsTabs.value[0].prop || "form";
    settingsData.value = activeElement.value.settingsValue;
    formReLoading.value = false;
  },
  { immediate: true }
);

const recordHistoryDebounce = debounce(() => recordHistory("property"), 1000);
// 同步更新组件属性
watchDebounced(
  settingsData,
  val => {
    const path = findPath(elementTree.value, { id: activeElement.value.id }) ?? [];
    const temp = filterObj(val, [undefined, null, ""], ["$"]);
    if (path.length && !isEqual(temp, get(elementTree.value, path))) {
      set(elementTree.value, path.concat("settingsValue"), temp);
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
