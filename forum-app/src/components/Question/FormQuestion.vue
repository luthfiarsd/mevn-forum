<template>
  <div>
    <div class="flex items-center gap-4 mb-4">
      <InputText class="flex-auto" placeholder="Insert question title" />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <Editor
        editorStyle="height: 320px"
        style="width: 100%"
        placeholder="Insert your question"
      />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <div class="card flex justify-center">
        <Select
          v-model="category"
          :options="categories"
          placeholder="Select your category question"
          class="w-full"
        />
      </div>
    </div>
    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="$emit('close')"
      ></Button>
      <Button type="button" label="Save" @click="$emit('close')"></Button>
    </div>
  </div>
</template>

<script setup>
defineEmits(["close"]);
import { ref } from "vue";

const category = ref();
const categories = ref(["General", "Coding"]);
</script>
