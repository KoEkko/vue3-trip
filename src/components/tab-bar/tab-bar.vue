<template>
    <div class="tab-bar">
    <template v-for="(item, index) in tabBarData">
      <div 
      class="tab-item"
      :class="{active: currentIndex === index}"
      @click="itemClick(item,index)"
      >
        <img v-if="(currentIndex === index)" :src="getAssets(item.imgActive)" alt="">
        <img v-else :src="getAssets(item.img)" alt="">
        <div class="text">{{ item.text }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router' 
import tabBarData from '../../assets/data/tab-bar'
import { getAssets } from '../../utils/getAssets'

let currentIndex = ref(0)
const router = useRouter()
const route = useRoute()
watch(route, (newRoute) => {
  const index = tabBarData.findIndex( item => item.path === newRoute.fullPath)
  if (index < 0 ) return
  currentIndex.value = index
})
const itemClick = (item, index) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less"  scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 50px;
  border-top: 1px solid var(--line-color);
  .tab-item {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex:1;
    &.active {
      color: var(--primary-color);
    }
    .text {
      margin-top: 2px;
      font-size: 14px;
    }
    img {
      width: 36px
    }
  }
}
</style>