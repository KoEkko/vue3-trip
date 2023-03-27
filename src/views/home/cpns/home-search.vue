<template>
  <div class="search-box">
  <!-- 位置 -->
    <div class="location">
    <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
    <div class="position" @click="positionClick">
      <span class="title">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
    </div>
  
  <!-- 日期 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <spa class="tip">入住</spa>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">
          共{{ stayCount }}晚
        </div>
      </div>
      <div class="end">
        <div class="date">
          <spa class="tip">离店</spa>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCalendar"
      @confirm="onConfirm"
      type="range"
      :round="false"
     />

     <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div 
        class="item"
        :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="btnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref , computed } from 'vue';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMonthDay , getDiffDate } from '@/utils/format_date'
import  useHomeStore  from '@/stores/modules/home';
import useMainStore from '@/stores/modules/main';

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res);
  },err => {
    console.log(err);
  }, {
    timeout:2000
  })
}

const router = useRouter()

// 拿取home数据
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

const cityClick = () => {
  router.push('/city')
}

// 拿取city数据
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 日期范围的处理

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))

const stayCount = ref(getDiffDate(startDate.value, endDate.value))

const showCalendar = ref(false)

const onConfirm = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  stayCount.value = getDiffDate(selectStartDate, selectEndDate)
  // 隐藏日历
  showCalendar.value = false
}


// search
const btnClick = () => {
  router.push({
    path:'/search',
    query:{
      startDate: startDateStr.value,
      endDate: endDateStr.value,
      currentCity: currentCity.value.cityName
    }
  })
}

</script>

<style lang="less"  scoped>
.search-box {
  --van-calendar-popup-height:100%;
}
.location {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  .city {
    flex: 1;
    font-size: 15px;
    color: #333;
  }
  .position {
    width: 80px;
    display: flex;
    align-items: center;
    .title {
      font-size: 15px;
    }

    img {
      width: 14px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex:1;
    display: flex;
    height: 44px;
    align-items: center;
    
    .end {
      min-width: 30%;
      padding-left: 20px;
    }
    
  }
  .date {
      display: flex;
      flex-direction: column;

      .tip {
        font-size: 12px;
        color: #999;
      }

      .time {
        margin-top: 3px;
        color: #333;
        font-size: 15px;
        font-weight: 500;
      }
    }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid  var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-color);
  }
}

.bottom-gray-line {
  border-bottom: 1px solid var(--line-color);
}
</style>