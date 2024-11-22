<template>
  <main>
    <nav>
      <NuxtLink to="/create">New planet</NuxtLink>
      
    </nav>
    <slot />
  </main>
</template>
<style lang="scss" scoped>
main {
  min-height: 100vh;
  border-radius: 16px;
  background-color: $mainColor;
  padding: 20px;
}
</style>