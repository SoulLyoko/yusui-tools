<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(false)

const form = ref({
  username: '',
  password: '',
  remember: true,
})
const rules = {
  username: [{ required: true }],
  password: [{ required: true }],
}
</script>

<template>
  <el-checkbox v-model="disabled">
    Form disabled
  </el-checkbox>

  <el-form :model="form" :rules="rules" :disabled="disabled" label-width="100px">
    <el-form-item label="Username" required>
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="Password" required>
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.remember">
        Remember me
      </el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>
