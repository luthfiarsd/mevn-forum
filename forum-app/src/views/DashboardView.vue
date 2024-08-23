<template>
  <div v-if="user">
    <h1 class="font-bold">Hi, {{ user.name }}</h1>
  </div>
</template>

<script setup>
import customFetch from "@/api";
import { ref, onMounted } from "vue";

const user = ref(null);

const getUser = async () => {
  const { data } = await customFetch.get("/auth/getuser");
  console.log(data);
  user.value = data.loggedUser;
};

onMounted(() => {
  getUser();
});
</script>
