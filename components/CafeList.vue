<script setup lang="ts">

const {data, error} = useAsyncData<cafe[]>('cafes', () => fetchCafes());

</script>

<template>
    <div class="flex flex-row flex-wrap gap-4 mx-auto px-4">
        <div v-for="cafe in data" :key="cafe.id">
            <NuxtLink :to="`cafe${cafe.id}`">
                <CafeCard :cafe="cafe" />
            </NuxtLink>
               
        </div>
    </div>
</template>