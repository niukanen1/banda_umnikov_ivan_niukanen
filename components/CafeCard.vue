
<script setup lang="ts">
defineProps<{
    cafe: cafe
}>()
</script>
<template>
    <div class="w-[200px]">

        <a-card hoverable>
            <template #cover>
                <a-badge-ribbon v-if="cafe.business_lunch" color="green" text="Business lunch">
                </a-badge-ribbon>
                <div v-if="cafe.photo.length>1">
                    <img class="w-[200px] h-[200px]" :src="cafe.photo" />
                </div>
                <div v-else>
                    <p class="p-5">No image...</p>
                </div>

            </template>
            <a-card-meta :title="cafe.name">
                <template #description>
                    <a-typography-paragraph v-if="cafe.cuisine.length>1"
                        type="secondary">{{cafe.cuisine}}</a-typography-paragraph>
                    <a-typography-paragraph v-if="cafe.cuisine.length==0" type="warning">No cuisine</a-typography-paragraph>
                    <a-typography-paragraph type="secondary">{{cafe.distance}}m</a-typography-paragraph>

                    <div class="flex flex-row justify-end items-center">
                        <a-typography-paragraph strong>{{cafe.price}}₽</a-typography-paragraph>
                    </div>

                </template>
            </a-card-meta>


        </a-card>


    </div>
</template>