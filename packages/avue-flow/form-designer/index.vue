<template>
  <el-container class="form-designer">
    <el-header class="main-header">头部</el-header>
    <el-container class="main-container">
      <el-aside class="left-panel">
        <LeftPanel></LeftPanel>
      </el-aside>
      <el-main class="main-panel" @click="activeItem = ''">
        <MainPanel v-model:list="resourceElementList"></MainPanel>
      </el-main>
      <el-aside class="right-panel">
        <RightPanel></RightPanel>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useProvideState } from "./composables";
import LeftPanel from "./components/left-panel/index.vue";
import MainPanel from "./components/main-panel/index.vue";
import RightPanel from "./components/right-panel/index.vue";

const { resourceElementList, activeItem } = useProvideState();
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
