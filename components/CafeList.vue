<script setup lang="ts">

const {data, error} = useAsyncData<cafe[]>('cafes', () => fetchCafes());

</script>

<template>
    <!-- <div class="flex flex-row flex-wrap gap-4 mx-auto px-4"> -->
        <div class="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 place-items-center mx-auto gap-4">
        <div v-for="cafe in data" :key="cafe.id">
            <NuxtLink :to="`cafe${cafe.id}`">
                <CafeCard :cafe="cafe" />
            </NuxtLink>
               
        </div>
    </div>
</template>