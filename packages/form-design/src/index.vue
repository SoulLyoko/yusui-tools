<template>
  <el-container class="form-designer">
    <el-aside class="left-panel">
      <LeftPanel></LeftPanel>
    </el-aside>
    <el-container>
      <el-header class="main-header">
        <MainHeader></MainHeader>
      </el-header>
      <el-main class="main-workspace" @click="activeElement = {}">
        <MainWorkspace v-model:list="resourceElementList"></MainWorkspace>
      </el-main>
    </el-container>
    <el-aside class="right-panel">
      <RightPanel></RightPanel>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import { useProvideState } from "./composables";
import LeftPanel from "./components/left-panel/index.vue";
import MainWorkspace from "./components/main-workspace/index.vue";
import RightPanel from "./components/right-panel/index.vue";
import MainHeader from "./components/main-header/index.vue";

const { resourceElementList, activeElement } = useProvideState({});
</script>

<style lang="scss" scoped>
.form-designer {
  height: 100%;
  width: 100%;
  .main-container {
    height: calc(100% - 60px);
  }
}
</style>
