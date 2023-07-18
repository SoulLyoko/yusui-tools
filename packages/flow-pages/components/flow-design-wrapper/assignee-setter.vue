<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'
import type { AssigneeItem } from '@yusui/flow-design'
import type { FlowUserTree } from '../../api'
import type { ElTreeSelect } from 'element-plus'

import { computed, ref, watch } from 'vue'
import { filterTree, treeMap } from '@yusui/utils'
import { FlowNodeSelect } from '@yusui/flow-design'

import { useFlowParamApi, useFlowUserApi } from '../../api'

const props = defineProps<{
  modelValue: string | string[]
  tableData?: { row?: AssigneeItem }
  placeholder: string
}>()
const emit = defineEmits(['update:modelValue'])

const selectValue = computed({
  get() {
    if (typeof props.modelValue === 'string')
      return props.modelValue ? props.modelValue.split(',') : []
    else
      return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val.join(','))
    if (props.tableData?.row) {
      // eslint-disable-next-line vue/no-mutating-props
      props.tableData.row.idVal = filterTree(
        treeData.value,
        e => val?.includes(e.id!),
      ).map(e => e[`${type.value}Id` as keyof typeof e]).join(',')
    }
  },
})

const inputValue = computed({
  get() {
    if (Array.isArray(props.modelValue))
      return props.modelValue.join(',')
    else
      return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const loading = ref(false)
const type = computed(() => props.tableData?.row?.type)

const treeData = ref<FlowUserTree[]>([])
const dynamicDic = ref<DicItem[]>([])

const { getUserTree } = useFlowUserApi()
const { getParam } = useFlowParamApi()

watch(
  type,
  (val) => {
    if (['dept', 'post', 'user'].includes(val!)) {
      loading.value = true
      getUserTree(val === 'user' ? '' : val).then((res) => {
        treeData.value = treeMap(res.data, (e) => {
          return { ...e, label: e.title, value: e.id, disabled: val === 'user' ? e.type !== 'user' : false }
        })
      }).finally(() => loading.value = false)
    }
    else if (type.value === 'dynamic') {
      loading.value = true
      getParam('flow.trends.user').then((res) => {
        dynamicDic.value = res.data
      }).finally(() => loading.value = false)
    }
  },
  { immediate: true },
)

const treeRef = ref<InstanceType<typeof ElTreeSelect>>()
function handleSelectAll() {
  selectValue.value = filterTree(treeData.value, e => e.type === type.value).map(e => e.id!)
}
</script>

<template>
  <div v-if="['dept', 'post', 'user'].includes(type!)">
    <ElTreeSelect
      ref="treeRef" v-model="selectValue" check-on-click-node check-strictly clearable collapse-tags
      collapse-tags-tooltip :data="treeData" filterable :loading="loading" :max-collapse-tags="3" multiple
      placeholder="请选择" show-checkbox style="width: 75%"
    />
    <el-button text type="primary" icon="el-icon-check" style="width: 20%" @click="handleSelectAll">
      全选
    </el-button>
  </div>
  <ElTreeSelect
    v-else-if="type === 'dynamic'" v-model="inputValue" clearable :data="dynamicDic" filterable
    :loading="loading" placeholder="请选择" style="width: 100%"
  />
  <FlowNodeSelect v-else-if="type === 'userTask'" v-model="inputValue" filter-type="userTask" placeholder="请选择" />
  <el-input v-else v-model="inputValue" clearable placeholder="请输入" />
</template>
