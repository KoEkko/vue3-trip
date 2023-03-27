<template>
  <div class="home" ref="homeRef">
    <homeNavBarVue />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchVue />
    <homeCategoriesVue />
    <template v-if="isShowSearchBar">
      <div class="search-bar">
        <searchBarVue />
      </div>
    </template>
    <homeContentVue />
  </div>
</template>

<script>
  export default { name:"home" }
</script>
<script setup>
import { watch, ref, computed ,onActivated} from 'vue';
import homeNavBarVue from "./cpns/home-nav-bar.vue";
import homeSearchVue from "./cpns/home-search.vue";
import homeCategoriesVue from "./cpns/home-categories.vue";
import useHomeStore from "@/stores/modules/home";
import homeContentVue from "./cpns/home-content.vue";
import searchBarVue from '@/components/search-bar/search-bar.vue';
import  useScroll  from '@/hooks/useScroll';

// 发送网络请求
// 1. 热门建议
// const hotSuggests = ref([])
// HYRequest.get({
//   url:"/home/hotSuggests"
// }).then(res => {
//   hotSuggests.value = res.data
// })

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchCategoryData();
homeStore.fetchHouseLists();
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if(newValue) {
    homeStore.fetchHouseLists().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100
// })
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

// 跳转回home页面的时候，保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top:scrollTop.value
  })
})

</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y:auto;
  padding-bottom: 60px;
  box-sizing: border-box;
}
.banner {
  img {
    width: 100%;
  }
}
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
