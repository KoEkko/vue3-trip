<template>
  <div class="tar-bar">
    <template v-for="(item, index) in tabBarData">
    <div 
      class="tab-bar-item" 
      :class="{active: currentIndex === index}"
      @click="itemClick(index,item)"
    >
      <img v-if="(currentIndex === index)" :src="getAssets(item.imgActive)" alt="">
      <img v-else :src="getAssets(item.img)" alt="">

      <span class="text">{{item.text}}</span>
    </div>
    </template>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAssets } from '@/utils/getAsstes';
import tabBarData from '@/assets/data/tab-bar/index'
import { useRouter } from 'vue-router';
const router = useRouter()
const currentIndex = ref(0)
const itemClick = (index,item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less"  scoped>
.tar-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top:1px solid #333 ;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
      color: var(--primary-color);
    }
    .text {
      margin-top: 3px;
      font-size: 14px;
    }
    img {
      width: 36px;
    }
  }
}
</style> 