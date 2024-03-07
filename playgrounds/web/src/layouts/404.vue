<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <el-result icon="info" title="404" sub-title="Not Found">
    <template #extra>
      <el-button @click="router.back()">
        Back
      </el-button>
    </template>
  </el-result>
</template>
