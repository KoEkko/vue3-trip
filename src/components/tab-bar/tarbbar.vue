<template>
  <div class="tar-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabBarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="(currentIndex !== index)" :src="getAssets(item.img)" alt="">
            <img  v-else :src="getAssets(item.imgActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
      </van-tabbar>
  </div>

</template>

<script setup lang="ts">
import { ref , watch } from 'vue';
import { useRoute } from 'vue-router'
import { getAssets } from '@/utils/getAsstes';
import tabBarData from '@/assets/data/tab-bar/index'

const currentIndex = ref(0)
const route = useRoute()
watch(route, (newRoute) => {
  const index = tabBarData.findIndex( item => item.path === newRoute.path) 
  if (index === -1) return
  currentIndex.value = index 
})
</script>

<style lang="less"  scoped>

</style> 