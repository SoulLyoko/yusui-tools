<script setup lang="ts">
import type { FlowDefinition } from '../../api'

import { ref, watchEffect } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useCrud } from '@yusui/composables'
import { Icon } from '@iconify/vue'

import { tableOption } from './option'
import { useFlowDefinitionApi } from '../../api'

const props = defineProps<{ categoryId?: string }>()
const emit = defineEmits(['add', 'view', 'edit', 'version'])

const { getList, deploy, remove } = useFlowDefinitionApi()

const {
  bindVal,
  crudStateRefs: { searchForm },
  getDataList,
} = useCrud({
  tableOption,
  crudOption: {
    getList,
    remove,
  },
  searchForm: { categoryId: props.categoryId },
})
watchEffect(() => {
  searchForm.value.categoryId = props.categoryId ?? ''
  getDataList()
})

const loading = ref(false)
async function handleDeploy(row: FlowDefinition) {
  await ElMessageBox.confirm('发布新版本，是否确认？', '提示', { type: 'success' })
  loading.value = true
  deploy({ flowModuleId: row.flowModuleId })
    .then(() => {
      ElMessage.success('发布成功')
      getDataList()
    })
    .finally(() => {
      loading.value = false
    })
}

async function handleDel(row: FlowDefinition) {
  console.log('🚀 ~ file: index.vue:49 ~ handleDel ~ row:', row)
  if (row.mainVersion)
    return ElMessage.warning('请先删除已发布的流程')

  await ElMessageBox.confirm('确认删除？', '提示', { type: 'warning' })
  await remove(row.flowModuleId!)
  ElMessage.success('删除成功')
  getDataList()
}
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <el-button type="primary" icon="el-icon-plus" @click="emit('add')">
        新增
      </el-button>
    </template>
    <template #menu-btn="{ row }">
      <el-dropdown-item icon="el-icon-view" @click="emit('view', row)">
        查看
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-edit" @click="emit('edit', row)">
        编辑
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-delete" @click="handleDel(row)">
        删除
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-upload" @click="handleDeploy(row)">
        发布
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-switch" @click="emit('version', row)">
        版本管理
      </el-dropdown-item>
    </template>
    <template #flowIcon="{ row }">
      <Icon :icon="row.flowIcon!" width="25" style="display: inline" />
    </template>
  </avue-crud>
</template>
