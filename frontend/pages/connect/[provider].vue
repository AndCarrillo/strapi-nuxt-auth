<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const provider = route.params.provider;
const access_token = route.query.access_token;

const { data, error } = await useFetch(
  `${config.public.strapi.url}/api/auth/${provider}/callback?access_token=${access_token}`
);

if (process.client && data.value) {
  localStorage.setItem("jwt", data.value.jwt);
  localStorage.setItem("user", JSON.stringify(data.value.user));
  router.push(`/users/${data.value.user.id}`);
}
</script>

<template>
  <div>
    <h1>user page</h1>
    <div v-if="error">Error: {{ error.message }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
