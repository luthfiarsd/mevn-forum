import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "./assets/style.css";


const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: ".my-app-dark",
      cssLayer: false,
    },
  },
});

// Global component

import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

app.component("InputText", InputText);
app.component("Dialog", Dialog);
app.component("Button", Button);

app.mount("#app");
