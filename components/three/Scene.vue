<template>
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :look-at="[0, 0, 0]"
    />
    <ThreePlanet :apparence="apparence" />
    <OrbitControls />
    <TresAmbientLight :intensity="1" />
</template>
<script setup lang='ts'>
import { OrbitControls } from '@tresjs/cientos'

const apparence = reactive({
  color: '#00ffff',
})
</script>