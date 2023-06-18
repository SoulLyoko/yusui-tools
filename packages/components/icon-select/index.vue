<script setup lang="ts">
/**
 * 图标选择组件
 * @prop {String} modelValue Icon 的icon值
 */
import type { PropType } from 'vue'

import { computed, onUnmounted, ref, watchEffect } from 'vue'
import { useFetch, useVModel } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const props = defineProps({
  modelValue: { type: String },
  source: { type: String as PropType<keyof typeof iframeSrcMap>, default: 'iconify' },
  collections: { type: String },
  width: { type: Number, default: 800 },
  height: { type: Number, default: 400 },
})
const modelValue = useVModel(props)

const iframeSrcMap = {
  iconify: 'https://icon-sets.iconify.design/',
  icones: 'https://icones.js.org/',
}

let interval: any
const popVisible = ref(false)
async function onPopShow() {
  popVisible.value = true
  clearInterval(interval)
  if (!globalThis.navigator.clipboard || props.collections)
    return
  await globalThis.navigator.clipboard.writeText('')
  interval = setInterval(async () => {
    const text = await globalThis.navigator.clipboard.readText()
    if (text && modelValue.value !== text)
      modelValue.value = text
  })
}
function onPopHide() {
  popVisible.value = false
  clearInterval(interval)
}
onUnmounted(() => {
  clearInterval(interval)
})

const isInputFocus = ref(false)
const searchValue = ref('')
const showInput = computed(() => isInputFocus.value || searchValue.value)

type FetchCollectionsResult = Record<string, { name: string; total: number }>
const activeTab = ref('')
const fetchColectionsUrl = computed(() => `https://api.iconify.design/collections?prefixes=${props.collections}`)
const { data: collectionsData, execute: fetchColections, onFetchResponse } = useFetch(fetchColectionsUrl, { immediate: false }).json<FetchCollectionsResult>()
onFetchResponse(() => {
  activeTab.value = Object.keys(collectionsData.value ?? {})[0]
})
watchEffect(() => {
  if (!props.collections || !popVisible.value)
    return
  fetchColections()
})

interface FetchIconsResult { prefix: string ;categories?: Record<string, string[]>; uncategorized?: string[] }
const fetchIconsUrl = computed(() => `https://api.iconify.design/collection?prefix=${activeTab.value}`)
const { data: iconsData, isFetching: fetchingIcons, execute: fetchIcons } = useFetch(fetchIconsUrl, { immediate: false }).json<FetchIconsResult>()
const iconList = computed<string[]>(() => {
  const { categories, uncategorized, prefix } = iconsData.value ?? {}
  if (uncategorized) {
    return uncategorized?.map((icon: string) => `${prefix}:${icon}`)
  }
  else if (categories) {
    const flatedIcons = Object.values(categories)?.flat().map(icon => `${prefix}:${icon}`) ?? []
    return [...new Set(flatedIcons)]
  }
  return []
})
const icons = computed(() => {
  return iconList.value.filter(e => e.includes(searchValue.value))
})
watchEffect(() => {
  if (!activeTab.value || !popVisible.value)
    return
  fetchIcons()
})
</script>

<template>
  <el-popover popper-class="icon-select-popper" trigger="click" :width="800" @show="onPopShow" @hide="onPopHide">
    <template #reference>
      <el-input v-model="modelValue" class="icon-select-input" placeholder="选择图标" v-bind="$attrs">
        <template #suffix>
          <Icon class="el-input__icon" :icon="modelValue!" />
        </template>
      </el-input>
    </template>

    <template v-if="collections">
      <el-row :gutter="20" align="middle">
        <el-col :span="showInput ? 16 : 22">
          <el-tabs v-model="activeTab">
            <el-tab-pane v-for="(collection, key) in collectionsData" :key="collection.name" :label="collection.name" :name="key" />
          </el-tabs>
        </el-col>
        <el-col :span="showInput ? 8 : 1 " style="padding-bottom: 10px">
          <el-input
            v-model="searchValue" placeholder="输入图标名称搜索" prefix-icon="el-icon-search" clearable
            @focus="isInputFocus = true" @blur="isInputFocus = false"
          />
        </el-col>
      </el-row>
      <el-skeleton :loading="fetchingIcons" :count="10">
        <template #template>
          <el-skeleton-item variant="h3" style="margin: 8px 0" />
        </template>
        <template #default>
          <el-scrollbar :height="height">
            <el-button v-for="icon in icons" :key="icon" :title="icon" size="large" text style="margin: 0" @click="modelValue = icon">
              <Icon :icon="icon" width="32px" style="display: inline-block" />
            </el-button>
          </el-scrollbar>
        </template>
      </el-skeleton>
    </template>

    <template v-else>
      <el-divider>在{{ source }}中查找图标，复制名称到输入框中</el-divider>
      <iframe :src="iframeSrcMap[source]" frameborder="0" width="100%" :height="height" />
    </template>
  </el-popover>
</template>
