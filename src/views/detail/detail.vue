<template>
  <div class="detail top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos :top-infos="mainPart.topModule" />
      <detail-facility
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule" />
      <detail-comment :comment="mainPart.dynamicModule.commentModule" />
      <detail-notice
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      />
      <detail-map :position="mainPart.dynamicModule.positionModule" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDetailInfos } from "@/services";
import DetailSwipe from "./cpns/detail_01-swipe.vue";
import DetailInfos from "./cpns/detail_02-infos.vue";
import DetailFacility from "./cpns/detail_03-facility.vue";
import DetailLandlord from "./cpns/detail_04-landlord.vue";
import DetailComment from "./cpns/detail_05-comment.vue";
import DetailNotice from "./cpns/detail_06-notice.vue";
import DetailMap from "./cpns/detail_07-map.vue";

const router = useRouter();
const route = useRoute();

// 发送网络请求获取数据
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
getDetailInfos(route.params.id).then((res) => {
  detailInfos.value = res.data;
});

// 监听返回按钮的点击
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped></style>
