<script setup lang="ts">

const rendered=ref(false);
const route=useRoute();
const id=parseInt(route.params.id as string)
console.log(`cafe${id}`);
const { data, error }=useAsyncData<cafe>(`cafe${id}`, () => fetchSingleCafe(id));

onMounted(() => {
    rendered.value=true
})
</script>

<template>
    <main class=" p-4 flex flex-col justify-center items-center">
        <article v-if="data">
            <div class="max-w-md">
                <img class="rounded-md" :src="data.photo" />
            </div>

            <a-typography-title :level="2">{{data.name}}</a-typography-title>

            <div class="flex flex-row justify-between">
                <a-typography-paragraph v-if="data.address">{{data.address}}</a-typography-paragraph>
                <a-typography-paragraph v-if="!data.address" type="warning">No address</a-typography-paragraph>

                <a-typography-paragraph v-if="data.landmark" type="secondary">{{data.landmark}}</a-typography-paragraph>

            </div>

            <a-typography-paragraph v-if="data.cuisine.length>1" type="secondary">{{data.cuisine}}</a-typography-paragraph>
            <a-typography-paragraph v-if="data?.cuisine.length==0" type="warning">No cuisine</a-typography-paragraph>

            <a-tag color="green" v-if="data.business_lunch">Business lunch</a-tag>
            <a-tag color="red" v-if="!data.business_lunch">No business lunch</a-tag>

            <a-typography-paragraph type="secondary">{{data.distance}}m</a-typography-paragraph>

            <div class="flex flex-row justify-end">
                <a-typography-paragraph strong>{{data.price}}₽</a-typography-paragraph>
            </div>

            <div v-if="rendered">
                <a-dropdown>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="1">Facebook</a-menu-item>
                            <a-menu-item key="2">VK</a-menu-item>
                            <a-menu-item key="3">Twitter</a-menu-item>
                        </a-menu>
                    </template>
                    <a-button>
                        Share
                    </a-button>
                </a-dropdown>
            </div>

        </article>

    </main>
</template>