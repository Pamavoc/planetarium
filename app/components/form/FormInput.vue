<template>
    <input type="text" :placeholder="placeholder" v-model="inputValue">
</template>
<script setup>
const inputValue = ref('')
const emit = defineEmits(['update']);

onUpdated(() => {
    emit('update', inputValue.value);
});
</script>