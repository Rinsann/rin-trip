<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <tab-bar v-show="!route.meta.hideTabBar" />
    <Loading />
    <!-- <tab-bar /> -->
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import { useRoute } from "vue-router";
import Loading from "./components/loading/loading.vue";
const route = useRoute();
</script>

<style scoped></style>
