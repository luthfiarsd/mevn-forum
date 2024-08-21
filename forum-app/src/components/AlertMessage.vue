<template>
  <Message severity="error" closable>{{ props.message }}</Message>
</template>

<script setup>
import Message from "primevue/message";

const props = defineProps({
  message: {
    type: String,
  },
});
</script>
