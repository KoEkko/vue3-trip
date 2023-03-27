<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="(item, index) in houseLists" :key="item.data.houseId">
          <houseItemV9Vue 
            v-if="item.discoveryContentType === 9"
            :item-data="item.data"
            @click="itemClick(item.data)"
          />
          <houseItemV3Vue 
            v-else-if="item.discoveryContentType === 3" 
            :item-data="item.data"
            @click="itemClick(item.data)"
          />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">

import useHomeStore from '@/stores/modules/home';
import houseItemV9Vue from '@/components/house-item-v9/house-item-v9.vue';
import houseItemV3Vue from '@/components/house-item-v3/house-item-v3.vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';


const homeStore = useHomeStore()
const { houseLists } = storeToRefs(homeStore)
const router = useRouter()
const itemClick = (item) => {
  router.push('/detail/' + item.houseId)
}

</script>

<style lang="less"  scoped>
.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding:10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>