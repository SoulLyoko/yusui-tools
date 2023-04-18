<script setup lang="ts">
import type { AvueFormGroup } from '@smallwei/avue'
import type { ElementTreeNode } from '../../types'

import { nextTick, ref, watch } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { cloneDeep, debounce, get, isEqual, set } from 'lodash-unified'
import { filterObjDeep } from '@yusui/utils'

import { useInjectState } from '../../composables'

const state = useInjectState()
const { elementTree, activeElement, baseOption, advanceOption, resolveSettings, recordHistory, getResource } = state

const formReLoading = ref(false)
const activeTab = ref('')
const settingsTabs = ref<AvueFormGroup[]>([])
const settingsData = ref<any>({})
const updateTimes = ref(0)
const commonOption = { labelPosition: 'left' as const, labelWidth: 100, menuBtn: false, span: 24 }

watch(
  () => activeElement.value.id,
  async () => {
    formReLoading.value = true
    updateTimes.value = 0
    await nextTick()
    const { settings, disabledSettings } = getResource(activeElement.value.name) ?? {}
    const baseGroup = { ...commonOption, label: '基础', prop: 'base', column: baseOption.value }
    const advanceGroup = { ...commonOption, label: '高级', prop: 'advance', column: advanceOption.value }
    const componentGroup = { ...commonOption, label: '属性', prop: 'component', column: resolveSettings(settings) }
    settingsTabs.value = [baseGroup, componentGroup, advanceGroup].filter(e => !disabledSettings?.includes(e.prop!))
    activeTab.value = settingsTabs.value[0].prop!
    settingsData.value = cloneDeep(activeElement.value.props)
    formReLoading.value = false
  },
  { immediate: true },
)

const recordHistoryDebounce = debounce(() => recordHistory('property'), 1000)
// 同步更新组件属性
watchDebounced(
  settingsData,
  (val) => {
    const temp = filterObjDeep(val, [undefined, null, ''], ['$'])
    if (activeElement.value.isRoot) {
      set(elementTree.value, 'props', temp)
    }
    else {
      const path = findPathById(elementTree.value, activeElement.value.id) ?? []
      if (path.length && !isEqual(temp, get(elementTree.value, path.concat('props'))))
        set(elementTree.value, path.concat('props'), temp)
    }
    // 第一次改变属性时不记录
    updateTimes.value && recordHistoryDebounce()
    updateTimes.value++
  },
  { deep: true, debounce: 100 },
)

function findPathById(object: ElementTreeNode, id?: string): string[] | void {
  if (object.id === id)
    return []
  if (object.children) {
    for (const key in object.children) {
      const result = findPathById(object.children[key], id)
      if (result)
        return ['children', key].concat(result)
    }
  }
}

// function findPath(object: any, predicate: any): string[] | undefined {
//   if (typeof object !== "object") return;
//   let find = findKey(object, predicate);
//   if (find) return [find];
//   for (const key in object) {
//     let result = findPath(object[key], predicate);
//     if (result) return [key].concat(result);
//   }
//   return;
// }
</script>

<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane v-for="group in settingsTabs" :key="group.label" :label="group.label" :name="group.prop">
      <avue-form v-if="!formReLoading" v-model="settingsData" class="settings-form" :option="group" />
    </el-tab-pane>
  </el-tabs>
</template>
