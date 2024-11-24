<template>
  <TresMesh>
      <TresSphereGeometry :args="[1, 15, 32, 16]" />
      <TresMeshBasicMaterial :color="apparence.color ?? 'orange'" />
    </TresMesh>
</template>

<script lang="ts" setup>
import type { Stats } from "~/types/planet";

interface Appearance {
    color: string;
}

defineProps({
  stats: {
    type: Object as () => Stats,
    required: false,
  },
  apparence: {
    type: Object as () => Appearance,
    default: (): Appearance => (
      {
        color: 'orange',
      }
    )
  }
})

</script>