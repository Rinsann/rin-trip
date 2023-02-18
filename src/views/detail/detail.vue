import { useRoute } from 'vue-router';
<template>
  <div class="detail top-page">
    <h2>detail: {{ paramsId }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
const paramsId = route.params.id
</script>

<style lang="less" scoped></style>
