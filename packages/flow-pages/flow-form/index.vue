<script setup lang="ts">
import type { FlowButton } from '../api'

import { ElMessage } from 'element-plus'

import { flowFormEmits, flowFormProps, useButtonHandler, useProvideState } from './composables'
import ButtonList from './components/button-list.vue'
import InternalApprovalForm from './components/approval-form.vue'
import { useConfigProvider } from '../composables'

const props = defineProps(flowFormProps)
const emit = defineEmits(flowFormEmits)
const state = useProvideState(props, emit)
const { ApprovalForm: rewriteApprovalForm, tabsProps } = useConfigProvider()

const ApprovalForm = rewriteApprovalForm ?? InternalApprovalForm

const {
  title,
  detail,
  flowDetail,
  tabRefs,
  tabList,
  activeTab,
  activeBtn,
  formLoading,
  formTabComponent,
  approvalVisible,
  submitLoading,
  beforeClick,
  beforeSubmit,
} = state

async function onButtonClick(btn: FlowButton) {
  activeBtn.value = btn
  for (const tabRef of Object.values(tabRefs.value))
    await tabRef?.validate?.()
  await beforeClick?.value?.(btn)
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
    await beforeSubmit?.value?.(activeBtn.value!)
    const handler = buttonHandler[buttonKey!]
    if (handler) {
      await handler?.()
      ElMessage.success('操作成功')
      approvalVisible.value = false
      emit('complete', activeBtn.value!)
    }
    else {
      ElMessage.error('无法找到相应的操作')
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
        {{ title ?? flowDetail.flowInstance?.title }}
      </div>
      <ButtonList v-if="!detail" @click="onButtonClick" />
    </el-header>
    <el-main class="flow-form__main">
      <el-tabs v-model="activeTab" v-bind="tabsProps">
        <el-tab-pane
          v-for="tab in tabList" :key="tab.prop" :label="tab.label" :name="tab.prop" :lazy="tab.lazy"
          :disabled="tab.disabled" :closable="tab.closable"
        >
          <component :is="formTabComponent" v-if="tab.prop === 'formTab'" :ref="(el: any) => tabRefs[tab.prop!] = el" />
          <component :is="tab.component" v-else :ref="(el: any) => tabRefs[tab.prop!] = el" />
        </el-tab-pane>
      </el-tabs>
    </el-main>

    <ApprovalForm @submit="onSubmit" />
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
