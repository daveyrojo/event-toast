<script setup lang="ts">
const { $events } = useNuxtApp<EventToast>();
watch(() => $events.events, (new_value) => {
  console.log({
    new_value
  })
})
</script>
<template>
  <TransitionGroup
    enter-active-class="ease-out duration-300  delay-150"
    enter-from-class="translate-x-full"
    leave-active-class="ease-in duration-300"
    leave-to-class="translate-x-full"
    move-class="duration-300">
    <section
      v-for="[evt, cnt] in $events?.events"
      :key="evt.event_id"
      class="toast">
      <header class="toast-type error">
        <h1 class="rotated">
          Event
        </h1>
      </header>
      <main class="event-content">
        <h1 class="title">
          Event Occured
        </h1>
          <p class="event-count">
            {{ cnt }}
          </p>
        <p class="message">
          {{ evt.message }}
        </p>
        <button
          class="dismiss"
          @click="$events.dismiss(evt)">
          dismiss
        </button>
      </main>
    </section>
  </TransitionGroup>
</template>
<style scoped>
.toast {
  pointer-events: auto;
  position: relative;
  margin-top: 0.5rem;
  transition: all 0.3s;
  bottom: 0;
  z-index: 50;
  min-height: 5rem;
  display: flex;
  max-width: 32rem;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #212529;
  color: white;

  &.toast-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    fill: #f87171; /* red-500 */
  }

  &.dismiss {
    font-size: 0.875rem;
    text-decoration: underline;
    opacity: 0.7;
    grid-row: span 2;
    grid-column: span 1;
    cursor: pointer;
    transition: opacity 0.3s, transform 0.3s;
  }

  &.dismiss:hover {
    opacity: 1;
  }

  &.dismiss:active {
    opacity: 0.8;
    transform: scale(0.95);
  }

  &.title {
    grid-column: span 2;
    font-weight: 600;
    grid-column-start: 1;
  }

  &.message {
    grid-column: span 2;
    grid-row: span 2;
    font-size: 0.875rem;
    grid-column-start: 1;
  }

  & header {
    text-transform: uppercase;
  }

  & header.success {
    background-color: #34d399; /* green-500 */
  }

  & header.warning {
    background-color: #fbbf24; /* yellow-500 */
  }

  & header.error {
    background-color: #f87171; /* red-500 */
  }

  &.rotated {
    transform: rotate(-90deg);
    color: white;
  }

  &.toast-content, &.event-content {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    min-width: 20rem;
    padding-left: 1rem;
    place-items: center;
    text-transform: lowercase;
  }

  &.event-content {
    padding-top: 0.5rem;
  }

  &.event-count {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1.5rem;
    max-height: 1.5rem;
    font-size: 1.125rem;
    border-radius: 9999px;
    background-color: #f87171; /* red-500 */
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    max-width: fit-content;
  }

  &.event-count, &.dismiss {
    grid-column-start: 3;
  }
}

</style>
