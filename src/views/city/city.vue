<template>
  <div class="city top-bar-hidden">
      <div class="top">
        <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/"  
      @cancel="onCancel"
      input-align="center"
      show-action
      shape="round"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template  v-for="(value, key, index) in cityData" :key="key">
          <van-tab :title="value.title" :name="key">
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content" >
      
      <template v-for="(value, key, index) in cityData" :key="index">
        
        <cityGroupVue v-show="(tabActive === key)" :group-data="value "></cityGroupVue>
      </template> 
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref , computed} from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';

import cityGroupVue from './cpns/city-group.vue';

const searchValue = ref('')
const tabActive = ref()

const router = useRouter()
const onCancel = () => {
  router.back()
}

// const CityData = ref()
// getCityAll().then(res => {
//   CityData.value = res.data
// })

const cityStore = useCityStore()
cityStore.fetchAllCityData()
const { cityData } = storeToRefs(cityStore) 

// 加computed 的原因是：直接从ref 对象获取到的数据不是响应式的，用computed 可以解决响应式的问题
const currentGroup = computed (() => {
  return cityData.value[tabActive.value]
})

</script>

<style lang="less"  scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>