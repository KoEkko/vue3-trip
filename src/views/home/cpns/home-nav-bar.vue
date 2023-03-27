<template>
  <div class="nav-bar">
    <div class="tit">弘源旅途</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.nav-bar {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f2f2f2;
  .tit {
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
