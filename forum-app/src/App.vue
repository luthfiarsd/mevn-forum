<template>
  <Header></Header>
</template>

<script setup>
import Header from "./layouts/Header.vue";
import customFetch from "./api";
import { onMounted } from "vue";

const getData = async () => {
  const res = await customFetch.get("/test");
  console.log(res);
};

onMounted(() => {
  getData();
});
</script>
