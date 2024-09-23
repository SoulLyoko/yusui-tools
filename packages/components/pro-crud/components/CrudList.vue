<script setup lang="ts"  generic="T extends any">
import type { CrudListSlots } from '../types'

import { computed } from 'vue'

import { useCrudInstance } from '../composables'
import { any } from '../utils'
import CrudMenu from './CrudMenu.vue'

const slots = defineSlots<CrudListSlots<T>>()

const { crudRef, tableOption, tableData, getItemValue, getMenuSlots } = useCrudInstance<T>()

const listOption = computed(() => {
  return { ...tableOption.value.listOption }
})

const showListContent = computed(() => {
  return listOption.value.content || slots['item-content']
})
</script>

<template>
  <div v-loading="crudRef?.tableLoading" class="pro-crud__list">
    <el-page-header
      v-for="(row, index) in tableData" :key="row[tableOption.rowKey!] ?? index" class="pro-crud__list-item"
      @click="crudRef?.$emit('row-click', row, {} as any, $event)"
      @dblclick="crudRef?.$emit('row-dblclick', row, {} as any, $event)"
      @contextmenu="crudRef?.$emit('row-contextmenu', row, {} as any, $event)"
    >
      <template #icon>
        <slot name="item-icon" :row="row" :index="index">
          <el-avatar :src="getItemValue(listOption, 'icon', row, index)" />
        </slot>
      </template>
      <template #title>
        <slot name="item-title" :row="row" :index="index">
          <el-text tag="div">
            <slot name="item-title" :row="row" :index="index">
              {{ getItemValue(listOption, 'title', row, index) }}
            </slot>
          </el-text>
          <el-text type="info" tag="div">
            <slot name="item-subtitle" :row="row" :index="index">
              {{ getItemValue(listOption, 'subtitle', row, index) }}
            </slot>
          </el-text>
        </slot>
      </template>
      <template v-if="showListContent" #content>
        <slot name="item-content" :row="row" :index="index">
          {{ getItemValue(listOption, 'content', row, index) }}
        </slot>
      </template>
      <template #extra>
        <CrudMenu :row="row" :index="index">
          <template v-for="(slot, slotName) in getMenuSlots(slots)" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="any(slotProps)" />
          </template>
        </CrudMenu>
      </template>
    </el-page-header>
  </div>
</template>
