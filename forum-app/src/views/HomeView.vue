<template>
  <main>
    <div class="grid grid-cols-12 !gap-4">
      <div
        class="!bg-slate-800 col-span-2 p-3 rounded-md text-white font-bold text-center"
      >
        Filter
      </div>
      <div class="!bg-slate-200 col-span-10 p-3 rounded-md">
        <div class="flex justify-between">
          <h2 class="text-4xl !font-bold">HipHopForum</h2>
          <Button
            v-if="authStore.currentUser"
            label="Add"
            class="bg-slate-200"
            rounded
            type="button"
            icon="pi pi-plus"
            @click="visible = true"
          ></Button>
        </div>
        <Dialog
          v-model:visible="visible"
          modal
          header="Add Question"
          :style="{ width: '70%' }"
        >
          <FormQuestion @close="closeDialog()" @reload="allQuestion()" />
        </Dialog>
        <div v-if="questionData">
          <list-question
            v-for="q in questionData"
            :key="q.id"
            :data="q"
          ></list-question>
        </div>
        <loading-spinner v-else></loading-spinner>
      </div>
    </div>
  </main>
</template>

<script setup>
import ListQuestion from "@/components/Question/ListQuestion.vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import FormQuestion from "@/components/Question/FormQuestion.vue";
import { ref, onMounted } from "vue";
import customFetch from "@/api";
import { useAuthStore } from "@/stores/authStores";
import LoadingSpinner from "@/components/Question/LoadingSpinner.vue";

const authStore = useAuthStore();
const visible = ref(false);
const questionData = ref(null);

const allQuestion = async () => {
  try {
    const { data } = await customFetch.get("/question");
    questionData.value = data.data;
  } catch (error) {
    console.log(error);
  }
};

const closeDialog = () => {
  visible.value = false;
};

onMounted(() => {
  allQuestion();
});
</script>
