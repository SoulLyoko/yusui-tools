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

const size = ref('default' as const)
const sizes = ['large', 'default', 'small']

const labelPosition = ref('right' as const)
const positions = ['left', 'right', 'top']
</script>

<template>
  <el-checkbox v-model="disabled">
    Form disabled
  </el-checkbox>
  <br>
  <el-radio-group v-model="size">
    <el-radio-button v-for="item in sizes" :key="item" :label="item" />
  </el-radio-group>
  <br>
  <el-radio-group v-model="labelPosition">
    <el-radio-button v-for="item in positions" :key="item" :label="item" />
  </el-radio-group>
  <br>
  <br>

  <el-form
    :model="form" :rules="rules" :disabled="disabled" :size="size" :label-position="labelPosition"
    label-width="100px"
  >
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
