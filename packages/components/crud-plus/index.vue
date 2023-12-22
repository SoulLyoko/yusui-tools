<script setup lang="ts" generic="T extends any">
import type { CrudPlusProps, CrudPlusSlots } from './types'

import { computed } from 'vue'

import CrudCard from './components/CrudCard.vue'
import CrudList from './components/CrudList.vue'
import { any } from './utils'

const props = defineProps<CrudPlusProps<T>>()
const slots = defineSlots<CrudPlusSlots<T>>()

const isCard = computed(() => props.option?.type === 'card')
const isList = computed(() => props.option?.type === 'list')
</script>

<template>
  <avue-crud class="crud-plus" :class="{ 'is-card': isCard, 'is-list': isList }" :option="option" :data="data">
    <template v-for="(slot, slotName) in slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps" />
    </template>
    <template v-if="isCard || isList" #footer>
      <CrudCard v-if="isCard">
        <template v-for="(slot, slotName) in slots" #[slotName]="slotProps">
          <slot :name="slotName" v-bind="any(slotProps)" />
        </template>
      </CrudCard>
      <CrudList v-if="isList">
        <template v-for="(slot, slotName) in slots" #[slotName]="slotProps">
          <slot :name="slotName" v-bind="any(slotProps)" />
        </template>
      </CrudList>
      <el-empty v-if="!data?.length" description="暂无数据" />
      <slot name="footer" />
    </template>
  </avue-crud>
</template>
