<template>
    <div v-for="data in item">
        <h1>{{ data.title }}</h1>
        <p>{{ data.body }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/test')
</script>

<style scoped>

</style>