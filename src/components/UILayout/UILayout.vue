<script setup lang="ts"></script>

<template>
<div class="container">
  <slot />
</div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1280px;
  margin: 80px auto 0;

  @media (max-width: 1280px) {
    padding: 0 40px;
  }

  @media (max-width: 425px) {
    padding: 0 8px;
  }
}
</style>