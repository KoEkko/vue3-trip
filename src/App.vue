<template>
  <div>
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <!-- 底部导航栏tab-bar -->
    <tarbbarVue v-show="!route.meta.hidden"></tarbbarVue>
    <!-- v-if="!route.meta.hidden" -->
    <loadingVue />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import tarbbarVue from './components/tab-bar/tarbbar.vue';
import loadingVue from './components/loading/loading.vue';
const route = useRoute()

</script>

<style scoped>

</style>