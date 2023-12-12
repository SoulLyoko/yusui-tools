<script lang="ts">
export default { name: 'Demo' }
</script>

<template>
  <div class="demo">
    <div class="code-demo">
      <slot name="demo" />
    </div>
    <details class="code-details">
      <summary>View Source</summary>
      <slot name="code" />
    </details>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;

  .code-demo {
    padding: 20px;
  }

  .code-details {
    text-align: center;
    border-top: 1px solid var(--vp-c-divider);

    summary {
      padding: 10px 0;
      margin: 0;
      cursor: pointer;
    }

    :deep([class^='language']) {
      margin: 0 !important;
    }
  }
}
</style>
