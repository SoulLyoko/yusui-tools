<script setup lang="ts" generic="T extends any">
import type { AvueFormOption } from '@smallwei/avue'
import type { CrudCardOption, CrudCardSlots } from '../types'

import { computed } from 'vue'
import { cloneDeep } from 'lodash-es'

import CrudMenu from './CrudMenu.vue'
import { any } from '../utils'
import { useCrudInstance } from '../composables'

const slots = defineSlots<CrudCardSlots<T>>()

const { crudRef, tableOption, tableData, getItemValue, getMenuSlots } = useCrudInstance<T>()

const cardOption = computed<AvueFormOption<T> & CrudCardOption>(() => {
  const column = [...tableOption.value.column ?? [], ...tableOption.value.group?.map(g => g.column ?? [])?.flat() ?? []]
  return cloneDeep({
    gutter: 10,
    span: 6,
    ...tableOption.value?.cardOption,
    menuBtn: false,
    detail: true,
    column: column.map((col) => {
      return {
        ...col,
        span: 24,
        display: !col.hide,
      }
    }),
  })
})

const showCardHeaderMenu = computed(() => {
  const { menu = true } = tableOption.value
  const { actionPosition = 'footer' } = cardOption.value
  return menu && actionPosition === 'header'
})
const showCardHeader = computed(() => {
  return showCardHeaderMenu.value || cardOption.value.icon || cardOption.value.title || slots['item-icon'] || slots['item-title']
})
const showCardContent = computed(() => {
  return cardOption.value.content || slots['item-content']
})
const showCardFooter = computed(() => {
  const { menu = true } = tableOption.value
  const { actionPosition = 'footer' } = cardOption.value
  return menu && actionPosition === 'footer'
})
</script>

<template>
  <el-row v-loading="crudRef?.tableLoading" class="crud-plus__card" :gutter="cardOption.gutter">
    <el-col v-for="(row, index) in tableData" :key="tableOption.rowKey ?? index" :span="cardOption.span">
      <el-card
        class="crud-plus__card-item" shadow="hover" @click="crudRef?.$emit('row-click', row, {} as any, $event)"
        @dblclick="crudRef?.$emit('row-dblclick', row, {} as any, $event)"
        @contextmenu="crudRef?.$emit('row-contextmenu', row, {} as any, $event)"
      >
        <template v-if="showCardHeader" #header>
          <el-page-header>
            <template #icon>
              <slot name="item-icon" :row="row" :index="index">
                <el-avatar :src="getItemValue(cardOption, 'icon', row, index)" />
              </slot>
            </template>
            <template #title>
              <slot name="item-title" :row="row" :index="index">
                <el-text tag="div">
                  <slot name="item-title" :row="row" :index="index">
                    {{ getItemValue(cardOption, 'title', row, index) }}
                  </slot>
                </el-text>
                <el-text type="info" tag="div">
                  <slot name="item-subtitle" :row="row" :index="index">
                    {{ getItemValue(cardOption, 'subtitle', row, index) }}
                  </slot>
                </el-text>
              </slot>
            </template>
            <template v-if="showCardHeaderMenu" #extra>
              <CrudMenu :row="row" :index="index">
                <template v-for="(slot, slotName) in getMenuSlots(slots)" #[slotName]="slotProps">
                  <slot :name="slotName" v-bind="any(slotProps)" />
                </template>
              </CrudMenu>
            </template>
          </el-page-header>
        </template>
        <slot v-if="showCardContent" name="item-content" :row="row" :index="index">
          {{ getItemValue(cardOption, 'content', row, index) }}
        </slot>
        <avue-form v-else :model-value="row" :option="cardOption">
          <template v-for="(slot, slotName) in slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="any(slotProps)" />
          </template>
        </avue-form>
        <template v-if="showCardFooter" #footer>
          <CrudMenu :row="row" :index="index">
            <template v-for="(slot, slotName) in getMenuSlots(slots)" #[slotName]="slotProps">
              <slot :name="slotName" v-bind="any(slotProps)" />
            </template>
          </CrudMenu>
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>
