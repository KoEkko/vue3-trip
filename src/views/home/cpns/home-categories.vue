<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less"  scoped>

.categories {
  padding: 0 8px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  height: 50px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    text-align: center;
    width: 70px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 32px;
      height: 32px;
    }
    .text {
      margin-top: 5px;
    }
  }
}
</style>