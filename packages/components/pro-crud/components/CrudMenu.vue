<script setup lang="ts" generic="T = any">
import type { CrudMenuSlots } from '../types'

import { computed, getCurrentInstance } from 'vue'

import { any } from '../utils'
import { useCrudInstance } from '../composables'

const props = defineProps<{ row: T, index: number }>()
defineSlots<CrudMenuSlots<T>>()

const $AVUE = getCurrentInstance()?.proxy?.$AVUE ?? {} as any
const { crudRef, tableOption, getPermission } = useCrudInstance()

const menuType = computed(() => {
  return tableOption.value.menuType ?? $AVUE.menuType
})

const btnList = computed(() => {
  const { row, index } = props
  return [
    {
      title: crudRef?.menuIcon('viewBtn'),
      icon: crudRef?.getBtnIcon('viewBtn'),
      onClick: () => crudRef?.rowView(row, index),
      show: getPermission('viewBtn', row, index),
    },
    {
      type: 'primary',
      title: crudRef?.menuIcon('copyBtn'),
      icon: crudRef?.getBtnIcon('copyBtn'),
      onClick: () => crudRef?.rowCopy(props.row),
      show: getPermission('copyBtn', row, index),
    },
    {
      type: 'primary',
      title: crudRef?.menuIcon('editBtn'),
      icon: crudRef?.getBtnIcon('editBtn'),
      onClick: () => crudRef?.rowEdit(row, index),
      show: getPermission('editBtn', row, index),
    },
    {
      type: 'danger',
      title: crudRef?.menuIcon('delBtn'),
      icon: crudRef?.getBtnIcon('delBtn'),
      onClick: () => crudRef?.rowDel(row, index),
      show: getPermission('delBtn', row, index),
    },
  ].filter(e => e.show)
})
</script>

<template>
  <template v-if="tableOption.menuType === 'menu'">
    <el-dropdown>
      <el-button text>
        {{ tableOption.menuBtnTitle ?? '操作' }}
        <Icon class="el-icon--right" icon="ep:arrow-down" />
      </el-button>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(item, btnIndex) in btnList" :key="btnIndex" :icon="item.icon" @click="item.onClick">
            {{ item.title }}
          </el-dropdown-item>
          <slot
            name="menu-btn" :row="any(row)" :column="any({})" :index="index" :type="menuType"
            :disabled="crudRef!.btnDisabled" :size="crudRef!.size"
          />
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </template>

  <template v-else>
    <el-button
      v-for="(item, btnIndex) in btnList" :key="btnIndex" :type="any(item.type)" :icon="item.icon"
      :text="menuType !== 'button'" @click="item.onClick"
    >
      {{ menuType === 'icon' ? '' : item.title }}
    </el-button>
  </template>

  <slot
    name="menu" :row="any(row)" :column="any({})" :index="index" :type="menuType" :disabled="crudRef!.btnDisabled"
    :size="crudRef!.size"
  />
</template>
