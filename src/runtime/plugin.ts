import { defineNuxtPlugin } from '#app'
import EventToastService from "../EventToastService"; 
import EventToast from "../components/EventToast.vue";

export default defineNuxtPlugin((nuxtApp) => { 
  nuxtApp.vueApp.use(EventToast, {
    property: {
      id: "EVENT_TOAST_COMPONENT"
    }
  });
  nuxtApp.provide('events', new EventToastService());
});