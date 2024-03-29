<script setup lang="ts" generic="T extends any">
import type { AvueCrudInstance, AvueCrudMethods } from '@smallwei/avue'
import type { ProCrudProps, ProCrudSlots } from './types'

import { computed, onMounted, reactive, ref } from 'vue'
import { pickBy } from 'lodash-unified'

import CrudCard from './components/CrudCard.vue'
import CrudList from './components/CrudList.vue'
import { any } from './utils'

const props = defineProps<ProCrudProps<T>>()
const slots = defineSlots<ProCrudSlots<T>>()

const isCard = computed(() => props.option?.type === 'card')
const isList = computed(() => props.option?.type === 'list')

const crudRef = ref<AvueCrudInstance>()
const methods = reactive({} as AvueCrudMethods)
defineExpose(methods)
onMounted(() => {
  const crudMethods = pickBy(crudRef.value ?? {}, value => typeof value === 'function')
  Object.assign(methods, crudMethods)
})
</script>

<template>
  <avue-crud ref="crudRef" class="pro-crud" :class="{ 'is-card': isCard, 'is-list': isList }" :option="option" :data="data">
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
