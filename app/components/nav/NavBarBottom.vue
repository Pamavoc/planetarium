<template>
  <nav>
      <NuxtLink to="/" active-class="">Visualisation</NuxtLink>
      <NuxtLink to="/glossary">Gloassary</NuxtLink>
      <NuxtLink to="/create">New planet</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.router-link-active {
  color: #FF00FF;
}
</style>