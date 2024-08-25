<template>
  <detail-question-comp
    v-if="questionData"
    :data="questionData"
  ></detail-question-comp>
  <loading-spinner v-else></loading-spinner>
</template>

<script setup>
import { useRoute } from "vue-router";
import DetailQuestionComp from "@/components/Question/DetailQuestionComp.vue";
import customFetch from "@/api";
import { ref, onMounted } from "vue";
import LoadingSpinner from "@/components/Question/LoadingSpinner.vue";

const questionData = ref(null);
const route = useRoute();

const detailQuestion = async () => {
  try {
    const { data } = await customFetch.get(`/question/${route.params.id}`);
    questionData.value = data.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  detailQuestion();
});
</script>
