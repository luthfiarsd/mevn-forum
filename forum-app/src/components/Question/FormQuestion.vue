<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex items-center gap-4 mb-4">
      <InputText
        v-model="questionData.title"
        class="flex-auto"
        placeholder="Insert question title"
      />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <Editor
        editorStyle="height: 320px"
        style="width: 100%"
        placeholder="Insert your question"
        v-model="questionData.question"
      />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <div class="card flex justify-center">
        <Select
          v-model="questionData.category"
          :options="categories"
          placeholder="Select your category question"
          class="w-full"
        />
      </div>
    </div>
    <alert-message
      v-if="errorAlert"
      :message="errorMessage"
      style="max-width: 100%"
      class="my-3"
    ></alert-message>
    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="$emit('close')"
      ></Button>
      <Button type="submit" label="Submit"></Button>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from "vue";
import customFetch from "@/api";
import AlertMessage from "../AlertMessage.vue";

const questionData = reactive({
  title: "",
  question: "",
  category: "",
});

const emit = defineEmits(["close"]);

// State Alert
const errorMessage = ref("");
const errorAlert = ref(false);

const clearInput = () => {
  questionData.title = "";
  questionData.question = "";
  questionData.category = "";
};

const handleSubmit = async () => {
  try {
    const newQuestion = await customFetch.post("/question", {
      title: questionData.title,
      question: questionData.question,
      category: questionData.category,
    });

    if (newQuestion) {
      clearInput();
      emit("close");
      emit("reload");
    }
  } catch (error) {
    errorAlert.value = true;
    errorMessage.value = error.response.data.message;
  }
};

const categories = ref(["General", "Coding"]);
</script>
