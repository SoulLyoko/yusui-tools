<script setup lang="ts">
import { flowFormEmits, flowFormProps, isMobile, useConfigProvider, useProvideState } from '@yusui/flow-pages'

import ButtonList from './components/ButtonList.vue'
import InternalApprovalForm from './components/ApprovalForm.vue'

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
  formLoading,
  tabsRef,
  onButtonClick,
  onSubmit,
} = state
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
      <ButtonList v-if="!detail && !isMobile()" @click="onButtonClick" />
    </el-header>
    <el-main class="flow-form__main">
      <el-tabs ref="tabsRef" v-model="activeTab" v-bind="tabsProps">
        <el-tab-pane
          v-for="tab in tabList" :key="tab.prop" :label="tab.label" :name="tab.prop" :lazy="tab.lazy"
          :disabled="tab.disabled" :closable="tab.closable"
        >
          <component :is="tab.component" :ref="(el: any) => tabRefs[tab.prop!] = el" />
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer v-if="!detail && isMobile()" class="flow-form__footer" height="auto">
      <ButtonList @click="onButtonClick" />
    </el-footer>

    <ApprovalForm @submit="onSubmit" />
  </el-container>
</template>

<style lang="scss">
.flow-form {
  height: 100%;

  .flow-form__title {
    padding: 8px 0;
    font-size: 16px;
  }

  .flow-form__footer {
    border-top: 2px solid var(--el-border-color-light);
    padding: 10px;
    text-align: center;
  }

  .flow-form__main {
    padding-top: 0;

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
      z-index: 1;
    }

    .el-drawer__close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
    }
  }

  .el-drawer__body,
  .el-dialog__body {
    margin: 0;
    padding: 0;
  }
}
</style>
