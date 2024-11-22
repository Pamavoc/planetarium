<template>
    <div>
        <button @click="create">Create planet</button>
    </div>
</template>
<script setup lang="ts">
import type { Planet } from '~/types/planet';

const planet: Planet = reactive({
 uuid: crypto.randomUUID(),
 name: 'Earth2',
 description: "La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie. Elle orbite autour du Soleil en 365,256 jours solaires — une année sidérale — et réalise une rotation sur elle-même relativement au Soleil en un jour sidéral (environ 23 h 56 min 4 s), soit un peu moins que son jour solaire de 24 h du fait de ce déplacement autour du Soleila. L'axe de rotation de la Terre possède une inclinaison de 23°, ce qui cause l'apparition des saisons.",
 appearance: {
    color: '#0000FF',
    size: 100,
    brightness: 1,
    surfaceType: 'CITY'
 },
 stats: {
    atmosphere: 1,
    gravity: 100,
    water: 70,
    vegetation: 80,
    temperature: 15
 }
});

const create = async () => {
    const { createPlanet } = usePlanets();
    const planetReturn = await createPlanet(planet);
}
</script>

