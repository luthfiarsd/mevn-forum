import { defineStore } from "pinia";
import { ref } from "vue";
import customFetch from "@/api";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("user", () => {
  const dialog = ref(false);
  const errorMessage = ref("");
  const errorAlert = ref(false);
  const currentUser = ref(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const router = useRouter();

  const loginUser = async (inputData) => {
    try {
      const { data } = await customFetch.post("/auth/login", {
        email: inputData.email,
        password: inputData.password,
      });
      currentUser.value = data.data;
      localStorage.setItem("user", JSON.stringify(data.data));

      dialog.value = false;
      router.push({ name: "dashboard" });
    } catch (error) {
      console.log(error);
      errorAlert.value = true;
      errorMessage.value = error.response.data.message;
    }
  };

  const registerUser = async (inputData) => {
    try {
      const { data } = await customFetch.post("/auth/register", {
        name: inputData.name,
        email: inputData.email,
        password: inputData.password,
      });
      currentUser.value = data.data;
      localStorage.setItem("user", JSON.stringify(data.data));

      dialog.value = false;
      router.push({ name: "dashboard" });
    } catch (error) {
      console.log(error);
      errorAlert.value = true;
      errorMessage.value = error.response.data.message;
    }
  };

  const logoutUser = async () => {
    try {
      localStorage.setItem("user", null);
      currentUser.value = null;

      await customFetch.get("/auth/logout");
      router.push({ name: "home" });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    dialog,
    loginUser,
    errorMessage,
    errorAlert,
    currentUser,
    logoutUser,
    registerUser
  };
});
