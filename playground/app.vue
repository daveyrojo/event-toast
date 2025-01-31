<template>
  <div>
    <button @click.prevent="alert">create alert!</button>
        <section id="toast-container">
      <EventToast />
    </section>
  </div>
</template>

<script setup lang="ts">
const { $events } = useNuxtApp();
const alert = () => $events.alert({event_id: 1, message: "first event!"});

</script>
<style>
#toast-container {
  right: 0;
  bottom: 5rem;
  z-index: 9999;
}
</style>
