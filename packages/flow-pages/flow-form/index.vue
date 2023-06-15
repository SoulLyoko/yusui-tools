<script setup lang="ts">
import type { FlowButton } from '../api'

import { ref } from 'vue'
import { ElMessage } from 'element-plus'

import { useButtonHandler, useEmits, useProps, useProvideState } from './composables'
import InternalForm from './components/internal-form.vue'
import ApprovalForm from './components/approval-form.vue'
import FlowTrack from './components/flow-track.vue'
import ButtonList from './components/button-list.vue'
import UploadTable from './components/upload-table.vue'

const props = defineProps(useProps())
const emit = defineEmits(useEmits())
const state = useProvideState(props, emit)

const {
  flowDetail,
  modelValue: formData,
  activeTab,
  activeBtn,
  formLoading,
  approvalVisible,
  submitLoading,
  fileIds,
} = state

const formRef = ref<InstanceType<typeof InternalForm>>()
async function onButtonClick(btn: FlowButton) {
  activeBtn.value = btn
  await formRef.value?.validate()
  await props.beforeClick?.(btn)
  if (btn?.approval !== 'false')
    approvalVisible.value = true
  else
    onSubmit()
}

const buttonHandler = useButtonHandler(state)
async function onSubmit() {
  try {
    const { buttonKey } = activeBtn.value
    submitLoading.value = true
    await props.beforeSubmit?.(activeBtn.value!)
    const handler = buttonHandler[buttonKey!]?.()
    if (handler instanceof Promise) {
      await handler
      ElMessage.success('操作成功')
      approvalVisible.value = false
      emit('complete', activeBtn.value!)
    }
    else {
      ElMessage.error('操作失败')
    }
  }
  finally {
    submitLoading.value = false
  }
}
</script>

<template>
  <el-main v-if="formLoading">
    <el-skeleton />
  </el-main>
  <el-container v-else class="flow-form">
    <el-header class="flow-form__header" height="auto">
      <div class="flow-form__title">
        {{ flowDetail.flowInstance?.title }}
      </div>
      <ButtonList v-if="!detail" @click="onButtonClick" />
    </el-header>
    <el-main class="flow-form__main">
      <el-tabs v-model="activeTab">
        <slot v-if="flowDetail?.process?.formPath" />
        <el-tab-pane v-else label="审批信息" name="form">
          <InternalForm ref="formRef" v-model="formData" :flow-detail="flowDetail" />
        </el-tab-pane>

        <el-tab-pane label="附件资料" name="file" lazy>
          <UploadTable v-model="fileIds" :flow-detail="flowDetail" />
        </el-tab-pane>

        <el-tab-pane label="流程跟踪" name="track" lazy>
          <FlowTrack :flow-detail="flowDetail" />
        </el-tab-pane>
      </el-tabs>
    </el-main>

    <ApprovalForm @confirm="onSubmit" />
  </el-container>
</template>

<style lang="scss">
.flow-form {
  height: 100%;

  .flow-form__title {
    padding: 4px 0;
    font-size: 16px;
  }

  .flow-form__button {
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .flow-form__main {

    .avue-form {
      padding: 0;
    }

    .el-tabs {
      height: 100%;

      .el-tabs__content {
        height: calc(100% - var(--el-tabs-header-height) - 15px);

        .el-tab-pane {
          height: 100%;
          overflow-y: auto;
        }
      }
    }
  }
}

.flow-form-overlay {

  .el-drawer__header,
  .el-dialog__header {
    margin: 0;
    padding: 0;

    .el-dialog__headerbtn {
      top: 0;
    }

    .el-drawer__close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .el-drawer__body,
  .el-dialog__body {
    margin: 0;
    padding: 0;
  }
}
</style>
