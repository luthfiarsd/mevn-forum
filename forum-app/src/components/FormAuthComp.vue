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
          <AlertMessage
            v-if="authStores.errorAlert"
            :message="authStores.errorMessage"
            style="max-width: 300px"
          ></AlertMessage>
          <div class="inline-flex flex-col items-center gap-2" v-if="!isLogin">
            <div class="w-full">
              <label for="naem" class="!text-white font-semibold !text-left"
                >Username</label
              >
            </div>
            <InputText
              id="name"
              class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
              type="text"
              v-model="userInput.name"
            ></InputText>
          </div>
          <div class="inline-flex flex-col items-center gap-2">
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
              :label="isLogin ? 'Login' : 'Register'"
              type="submit"
              text
              class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
            ></Button>
          </div>
          <div style="width: 300px" class="text-white">
            <p v-if="isLogin">
              Don't have an account yet?
              <span
                @click="isLogin = false"
                class="cursor-pointer mt-2 !text-purple-400"
                >Register</span
              >
            </p>
            <p v-else>
              Already registered?
              <span
                @click="isLogin = true"
                class="cursor-pointer my-2 !text-purple-400"
                >Login</span
              >
            </p>
          </div>
        </div>
      </form>
    </template>
  </Dialog>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/authStores";
import AlertMessage from "./AlertMessage.vue";

const authStores = useAuthStore();

// Action store
const { loginUser, registerUser } = authStores;

// State
const userInput = reactive({
  name: "",
  email: "",
  password: "",
});

const clearInput = () => {
  userInput.name = "";
  userInput.email = "";
  userInput.password = "";
};

const isLogin = ref(true);

const handleSubmit = () => {
  if (isLogin.value) {
    loginUser(userInput);
    clearInput();
  } else {
    registerUser(userInput);
    clearInput();
  }
};
</script>
