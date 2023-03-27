<template>
  <div class="city-group">
    <van-index-bar :index-list="listIndex">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(item, key) in groupData.hotCities" :key="key"  >
          <div class="list-item" @click="itemClick(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>
      <template v-for="(itemObj,index) in groupData.cities" :key="index">
      <van-index-anchor :index="itemObj.group" />
      <template v-for="(itemCity,indey) in itemObj.cities" :key="indey" >
        <van-cell :title="itemCity.cityName" @click="itemClick(itemCity)" />
      </template>
    </template>
    </van-index-bar>

</div>
</template>

<script setup lang="ts">
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { computed } from 'vue'
import { useRouter } from 'vue-router';
const props = defineProps({
  groupData:{
    type:Object,
    default:() => ({})
  }
})

const listIndex = computed( () => {
  const list =  props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

const router = useRouter()
const store = useCityStore()
const { currentCity } = storeToRefs(store)
const itemClick = (city) => {
  // 数据
  currentCity.value = city
  // 跳回上一级
  router.back()
}



</script>

<style lang="less"  scoped>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  .list-item {
    width: 70px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    color: #333;
    background-color: #fff4ec;
    border-radius: 12px;
    margin-top: 6px;
  }
}
</style>