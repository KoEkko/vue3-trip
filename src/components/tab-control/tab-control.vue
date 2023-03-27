<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div 
        class="tab-control-item"
        :class="{ active : index === currentIndex }"
        @click="itemClick(index)"
      >
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  titles:{
    type: Array,
    default: () => ([])
  }
})
let currentIndex = ref(0)
const emit = defineEmits(['on-click'])
const itemClick = (index) => {
  currentIndex.value = index
  emit('on-click', index)
}
const setCurrentIndex = (index) => {
  currentIndex.value = index
}

</script>

<style lang="less"  scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item.active {
  color: var(--primary-color);
  font-weight: 700;
}
.tab-control-item.active span {
  border-bottom: 3px solid var(--primary-color);
  padding: 8px;
}
</style>