<template>
  <div>
    <Header></Header>
    <div class="p-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from "./layouts/Header.vue";
</script>
