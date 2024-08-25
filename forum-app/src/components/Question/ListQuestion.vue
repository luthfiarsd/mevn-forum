<template>
  <div class="card my-3">
    <Panel>
      <template #header>
        <div class="flex items-center gap-2">
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            size="large"
            shape="circle"
          />
          <span class="font-bold">Amy Elsner</span>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <Button icon="pi pi-thumbs-up-fill" rounded text></Button>
            <span> {{ props.data.countVote }}</span>
          </div>
          <span class="text-surface-500 dark:text-surface-400">{{
            dateFormat(props.data.createdAt)
          }}</span>
        </div>
      </template>
      <router-link to="/" class="text-4xl text-primary no-underline">{{
        props.data.title
      }}</router-link>
      <p class="my-3">
        <span v-html="props.data.question.substring(0, 200)"></span>
      </p>
      <chip :label="props.data.category"></chip>
    </Panel>
  </div>
</template>

<script setup>
import Panel from "primevue/panel";
import Avatar from "primevue/avatar";
import Chip from "primevue/chip";

const dateFormat = (dataInput) => {
  const newDate = new Date(dataInput).toLocaleString();

  return newDate;
};

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
