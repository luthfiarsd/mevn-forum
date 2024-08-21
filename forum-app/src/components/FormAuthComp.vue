<template>
  <Dialog
    v-model:visible="dialog"
    pt:root:class="!border-0 !bg-transparent"
    pt:mask:class="backdrop-blur-sm"
  >
    <template #container="{ closeCallback }">
      <form @submit.prevent="handleSubmit" action="">
        <div
          class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
          style="
            background-image: radial-gradient(
              circle at right top,
              var(--p-blue-400),
              var(--p-blue-800)
            );
          "
        >
          <div class="inline-flex flex-col items-center gap-2">
            <AlertMessage
              v-if="authStores.errorAlert"
              :message="authStores.errorMessage"
              style="max-width: 300px"
            ></AlertMessage>
            <div class="w-full">
              <label for="Email" class="!text-white font-semibold !text-left"
                >Email</label
              >
            </div>
            <InputText
              id="Email"
              class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
              type="email"
              v-model="userInput.email"
            ></InputText>
          </div>
          <div class="inline-flex flex-col gap-2">
            <label for="password" class="!text-white font-semibold"
              >Password</label
            >
            <InputText
              id="password"
              v-model="userInput.password"
              class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
              type="password"
            ></InputText>
          </div>
          <div class="flex items-center gap-4">
            <Button
              label="Cancel"
              @click="closeCallback"
              text
              class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
            ></Button>
            <Button
              label="Login"
              type="submit"
              text
              class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
            ></Button>
          </div>
        </div>
      </form>
    </template>
  </Dialog>
</template>

<script setup>
import { reactive } from "vue";
import { useAuthStore } from "@/stores/authStores";
import AlertMessage from "./AlertMessage.vue";

const authStores = useAuthStore();

// Action store
const { loginUser } = authStores;

// State
const userInput = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  loginUser(userInput);
};
</script>
