import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule({
  meta: {
    name: 'event-toast',
    configKey: 'eventToast'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_, _nuxt) {
    const resolver = createResolver(import.meta.url)
    // Add the plugin (from runtime/)
    addPlugin({
      src: require.resolve('./runtime/plugin'),
      mode: 'client' // Ensure it runs only on the client
    });
  }
});