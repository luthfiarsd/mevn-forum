<template>
  <h1>{{ dataMessage }}</h1>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const dataMessage = ref(null);

const getMessage = async () => {
  try {
    const response = await axios.get("http://localhost:3000/");
    dataMessage.value = response.data.message;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getMessage();
});
</script>
