<script setup lang="ts">
import type { CellSlots } from 'uview-plus/types/comps/cell'

import { useSlots } from 'vue'

import { useFilter, useOption, useSearch } from './composables'
import { listEmits, listProps } from './constants'

const props = defineProps(listProps)
const emit = defineEmits(listEmits)
const slots = useSlots()
const slotNames = {
  title: 'title',
  label: 'label',
  value: 'value',
  icon: 'icon',
  rightIcon: 'right-icon',
  backTop: 'back-top',
}

const { option } = useOption(props)
const { searchValue, searchListeners } = useSearch(props, emit)
const { filterForm, filterListeners } = useFilter(props, emit)

function onLoadmore() {
  emit('loadmore')
}
function onItemClick(row: any, index: number) {
  emit('itemClick', row, index)
}
function getSlotName(name: string) {
  return (slots[name] ? name : '') as keyof CellSlots
}
</script>

<template>
  <view class="uvue-list">
    <u-sticky bg-color="#ffffff" v-bind="option.sticky">
      <slot name="search-top" />
      <u-search
        v-if="option.search" v-model="searchValue" placeholder="输入关键字搜索"
        v-bind="{ ...searchListeners, ...option.search }"
      />
      <uvue-filter v-if="option.filter" v-model="filterForm" :option="option.filter" v-bind="{ ...filterListeners }" />
      <slot name="search-bottom" />
    </u-sticky>

    <slot name="list-top" />
    <u-empty v-if="option.empty && !data.length" v-bind="option.empty">
      <template #default>
        <slot name="empty" />
      </template>
    </u-empty>

    <view v-if="$slots['list-item']">
      <slot
        v-for="(row, index) in data" :key="(option.rowKey && row[option.rowKey]) || index" name="list-item"
        :row="row" :index="index"
      />
    </view>

    <u-cell-group v-else v-bind="option.cellGroup">
      <u-cell
        v-for="(row, index) in data" :key="(option.rowKey && row[option.rowKey]) || index"
        v-bind="{ ...option.cell, ...(option.formatter?.(row) ?? row) }" @click="onItemClick(row, index)"
      >
        <template #[getSlotName(slotNames.title)]>
          <slot name="title" :row="row" :index="index" />
        </template>
        <template #[getSlotName(slotNames.label)]>
          <slot name="label" :row="row" :index="index" />
        </template>
        <template #[getSlotName(slotNames.value)]>
          <slot name="value" :row="row" :index="index" />
        </template>
        <template #[getSlotName(slotNames.icon)]>
          <slot name="icon" :row="row" :index="index" />
        </template>
        <template #[getSlotName(slotNames.rightIcon)]>
          <slot name="right-icon" :row="row" :index="index" />
        </template>
      </u-cell>
    </u-cell-group>
    <slot name="list-bottom" />

    <slot name="loadmore-top" />
    <u-loadmore v-if="option.loadmore" :status="status" v-bind="option.loadmore" @loadmore="onLoadmore" />
    <slot name="loadmore-bottom" />

    <u-back-top v-if="option.backTop" :scroll-top="scrollTop" v-bind="option.backTop">
      <template v-if="$slots['back-top']" #default>
        <slot name="back-top" />
      </template>
    </u-back-top>
  </view>
</template>

<style lang="scss" scoped>
.uvue-list {
  padding: 10px;
}
</style>
