<template>
    <div>
        <p>Planetarium</p>
    </div>
</template>
<script setup lang="ts">
// const { data } = useFetch('/api/planets', { method: 'GET' })

const sendDiscordMessage = async (message: string) => {
    await useFetch(`https://discord.com/api/webhooks/1309446893167837186/YllsyJmxiy_jTHc4rXeAYvbSZ5Xf4LjokcabuVvhj6LGF2vE0kNv5rG1YC4ejY_GVZqH`, {
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
    sendDiscordMessage('hello from planetarium')
})

</script>