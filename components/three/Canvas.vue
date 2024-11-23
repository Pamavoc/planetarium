<template>
  <TresCanvas class="canvas">
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :look-at="[0, 0, 0]"
    />
    <ThreePlanet :apparence="apparence" />
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
<script setup lang='ts'>
import { TresCanvas } from '@tresjs/core'

const apparence = reactive({
  color: '#00ffff',
})

console.log(apparence)

</script>

<style>
.canvas {
  height: 50vh;
  width: 100%;
}
</style>