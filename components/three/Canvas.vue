<template>
  <TresCanvas>
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :look-at="[0, 0, 0]"
    />
    <ThreePlanet :apparence="apparence" />
    <TresOrbitControls />
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
<script setup lang='ts'>
import { TresCanvas } from '@tresjs/core'

const apparence = reactive({
  color: '#00ffff',
})
</script>