<script setup lang="ts">

</script>

<template>
  <h3>基础用法</h3>
  <el-dropdown trigger="click">
    <el-button text type="primary">
      Dropdown List
      <Icon icon="ep:arrow-down" class="el-icon--right" />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item disabled>
          Action 3
        </el-dropdown-item>
        <el-dropdown-item divided>
          Action 5
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-space>
    <el-dropdown split-button size="large">
      Dropdown List
    </el-dropdown>
    <el-dropdown split-button>
      Dropdown List
    </el-dropdown>
    <el-dropdown split-button size="small">
      Dropdown List
    </el-dropdown>
  </el-space>
</template>
