// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi"],
  runtimeConfig: {
    public: {
      axios: {
        baseURL: "http://localhost:1337",
      },
      strapi: {
        url: "http://localhost:1337",
        entities: ["articles", "users"],
      },
    },
  },
});
