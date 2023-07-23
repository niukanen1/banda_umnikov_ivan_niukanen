<template>
    <nav class="p-3 bg-white shadow-sm text-black flex flex-row items-center justify-between w-full">
        <NuxtLink to="/" class="font-bold text-lg">Cafe browser</NuxtLink>
        <div>
            <a-button type="default" @click="getRandomCafe">Get random cafe</a-button>
        </div>

    </nav>
    <slot />
</template>

<script setup lang="ts">
const getRandomCafe=() => {
    navigateTo("/cafe"+getRandomInt(23))
}

const getRandomInt=(max: number) => {
    return Math.floor(Math.random()*max);
}
</script>