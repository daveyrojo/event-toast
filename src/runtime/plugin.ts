import { defineNuxtPlugin } from '#app'
import EventToastService from "../EventToastService";
import EventToast from "../components/EventToast.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('EventToast', EventToast);
  nuxtApp.provide('events', new EventToastService());
});
