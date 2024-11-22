<template>
    <div>
        <p>Planetarium</p>
        <button @click="sendDiscordMessage('test pam env')">Welcome planetarium from</button>
    </div>
</template>
<script setup lang="ts">
// const { data } = useFetch('/api/planets', { method: 'GET' })
const config = useRuntimeConfig()

const sendDiscordMessage = async (message: string) => {
    await useFetch(config.public.discordWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    })
}

onMounted(() => {
   //sendDiscordMessage('hello from @Pam')
})

</script>