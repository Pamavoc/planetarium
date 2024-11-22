<template>
  <div>
    {{ route.params.uuid }}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const { fetchPlanetByUUID } = usePlanets()

const planet = await fetchPlanetByUUID(route.params.uuid as string)
</script>

<style>

</style>