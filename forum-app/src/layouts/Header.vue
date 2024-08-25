<template>
  <div>
    <Menubar :model="items">
      <template #end>
        <Button
          style="
            background-image: radial-gradient(
              circle at left top,
              var(--p-blue-300),
              var(--p-blue-600)
            );
          "
          label="Login"
          v-if="!authStores.currentUser"
          icon="pi pi-user"
          @click="dialog = true"
        >
        </Button>
        <div v-else>
          <Button
            style="
              background-image: radial-gradient(
                circle at left top,
                var(--p-blue-300),
                var(--p-blue-600)
              );
            "
            label="Dashboard"
            icon="pi pi-warehouse"
            @click="DashboardPath"
          >
          </Button>
          <Button
            style="
              background-image: radial-gradient(
                circle at left top,
                var(--p-red-300),
                var(--p-red-600)
              );
            "
            label="Logout"
            class="ml-3"
            severity="danger"
            @click="logoutUser"
          >
          </Button>
        </div>
      </template>
    </Menubar>

    <FormAuthComp
      v-model:visible="dialog"
      pt:root:class="!border-0 !bg-transparent"
      pt:mask:class="backdrop-blur-sm"
    ></FormAuthComp>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
import FormAuthComp from "../components/FormAuthComp.vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/authStores";
import { useRouter } from "vue-router";

const authStores = useAuthStore();
const router = useRouter();

// Action pinia
const { logoutUser } = authStores;
const DashboardPath = () => {
  router.push({ name: "dashboard" });
};

// State pinia
const { dialog } = storeToRefs(authStores);

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => {
      router.push({ name: 'home' });
    },
  },
  {
    label: "About",
    icon: "pi pi-book",
    command: () => {
      router.push({ name: 'about' });
    },
  },
]);
</script>
