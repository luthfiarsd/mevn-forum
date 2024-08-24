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
          <h2 class="text-4xl !font-bold">Questions List</h2>
          <Button
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
          header="Edit Profile"
          :style="{ width: '70%' }"
        >
          <span class="text-surface-500 dark:text-surface-400 block mb-8"
            >Update your information.</span
          >
          <FormQuestion @close="closeDialog()" />
        </Dialog>
        <list-question></list-question>
        <list-question></list-question>
        <list-question></list-question>
      </div>
    </div>
  </main>
</template>

<script setup>
import ListQuestion from "@/components/Question/ListQuestion.vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import FormQuestion from "@/components/Question/FormQuestion.vue";
import { ref } from "vue";

const visible = ref(false);

const closeDialog = () => {
  visible.value = false;
};
</script>
