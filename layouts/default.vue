<template>
  <main>
    <NavBarBottom />
    <slot />
    
  </main>
</template>
<style lang="scss" scoped>
main {
  min-height: 100vh;
  border-radius: 16px;
  padding: 20px;
}
</style>