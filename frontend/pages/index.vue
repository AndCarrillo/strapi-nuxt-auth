<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-50"
  >
    <h1 class="text-4xl font-bold text-blue-700 mb-6">
      Bienvenido a strapi-nuxt-auth
    </h1>
    <NuxtLink
      to="/login"
      class="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >Login Social</NuxtLink
    >
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
