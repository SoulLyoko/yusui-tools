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

const { getList, deploy } = useFlowDefinitionApi()

const {
  bindVal,
  crudStateRefs: { searchForm },
  getDataList,
} = useCrud({
  tableOption,
  crudOption: {
    getList,
    // remove
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
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <el-button type="primary" icon="el-icon-plus" @click="emit('add')">
        新增
      </el-button>
    </template>
    <template #menu="{ row }">
      <el-button :loading="loading" type="text" icon="el-icon-view" @click="emit('view', row)">
        查看
      </el-button>
      <el-button :loading="loading" type="text" icon="el-icon-edit" @click="emit('edit', row)">
        编辑
      </el-button>
      <el-button :loading="loading" type="text" icon="el-icon-upload" @click="handleDeploy(row)">
        发布
      </el-button>
      <el-button :loading="loading" type="text" icon="el-icon-switch" @click="emit('version', row)">
        版本管理
      </el-button>
    </template>
    <template #flowIcon="{ row }">
      <Icon :icon="row.flowIcon" width="25" style="display: inline" />
    </template>
  </avue-crud>
</template>
