<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const user = JSON.parse(localStorage.getItem("user") || "{}");
const jwt = localStorage.getItem("jwt");

// Aquí podrías hacer una petición protegida usando el JWT si lo necesitas
// Ejemplo:
// const { data: profile, error } = await useFetch(`http://localhost:1337/api/users/${route.params.id}`, {
//   headers: { Authorization: `Bearer ${jwt}` }
// })
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-50"
  >
    <div class="bg-white rounded shadow p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold text-blue-700 mb-4">Usuario autenticado</h1>
      <p class="mb-2"><strong>Usuario:</strong> {{ user.username }}</p>
      <p class="mb-2"><strong>ID:</strong> {{ user.id }}</p>
      <p class="mb-2"><strong>Email:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>
