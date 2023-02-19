<template>
  <div class="home" ref="homeRef">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.18'" :end-date="'09.20'" />
    </div>
    <home-content />
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<script setup>
import { watch, computed, ref, onActivated } from "vue";
import useHomeStore from "@/stores/modules/home";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import useScroll from "@/hooks/useScroll";
import searchBar from "@/components/search-bar/search-bar.vue";

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();

// 监听滚动到底部
const homeRef = ref();
const { isReachBottom, scrollTop } = useScroll(homeRef);
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false;
    });
  }
});

// 定义的可响应式数据需要依赖另一个响应式数据可以使用计算属性
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 350;
});

// 跳转到home时,保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
  overflow-y: auto;
  box-sizing: border-box;
  height: 100vh;
}
.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
