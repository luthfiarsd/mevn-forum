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
            label="Home"
            icon="pi pi-home"
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

const authStores = useAuthStore();

// Action pinia
const { logoutUser } = authStores;

// State pinia
const { dialog } = storeToRefs(authStores);

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
</script>
