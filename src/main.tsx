import {createApp} from "vue";
import VueApp from "./vue/App.vue";
createApp(VueApp).mount('#vue-header');

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {ReactApp} from "./react/App.tsx";

createRoot(document.getElementById("react-sidebar")!).render(
  <StrictMode>
    <ReactApp />
  </StrictMode>
);
