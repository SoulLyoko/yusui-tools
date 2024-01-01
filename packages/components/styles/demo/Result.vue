<script setup lang="ts">

</script>

<template>
  <h3>基础用法</h3>
  <el-space>
    <el-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
      <template #extra>
        <el-button type="primary">
          Back
        </el-button>
      </template>
    </el-result>

    <el-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
      <template #extra>
        <el-button type="primary">
          Back
        </el-button>
      </template>
    </el-result>

    <el-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
      <template #extra>
        <el-button type="primary">
          Back
        </el-button>
      </template>
    </el-result>

    <el-result icon="info" title="Info Tip">
      <template #sub-title>
        <p>Using slot as subtitle</p>
      </template>
      <template #extra>
        <el-button type="primary">
          Back
        </el-button>
      </template>
    </el-result>
  </el-space>
</template>
