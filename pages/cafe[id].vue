<script setup lang="ts">
import { MenuProps } from 'ant-design-vue';
import { MenuClickEventHandler } from 'ant-design-vue/es/menu/src/interface';


const rendered=ref(false);
const route=useRoute();
const id=parseInt(route.params.id as string)
const { data, error }=useAsyncData<cafe>(`cafe${id}`, () => fetchSingleCafe(id));
// const handleShare: MenuProps['onClick'] = (e: MenuClickEventHandler) => { 
//     console.log(e);
// }
onMounted(() => {
    rendered.value=true
})
</script>

<template>
    <main class="p-4 flex flex-col justify-center items-center">
        <article v-if="data" class="border rounded-md overflow-hidden max-w-[450px]">
            <div class="">
                <img class=" object-fill" :src="data.photo" />
            </div>

            <div class="p-2">
                <a-typography-title :level="2">{{data.name}}</a-typography-title>

                <div class="flex flex-row justify-between">
                    <div class="">
                        <a-typography-paragraph v-if="data.address">{{data.address}}</a-typography-paragraph>
                        <a-typography-paragraph v-if="!data.address" type="warning">No address</a-typography-paragraph>
                    </div>

                    <div class="text-right">
                        <a-typography-paragraph v-if="data.landmark"
                            type="secondary">{{data.landmark}}</a-typography-paragraph>
                    </div>

                </div>

                <a-typography-paragraph v-if="data.cuisine.length>1"
                    type="secondary">{{data.cuisine}}</a-typography-paragraph>
                <a-typography-paragraph v-if="data?.cuisine.length==0" type="warning">No cuisine</a-typography-paragraph>

                <a-tag color="green" v-if="data.business_lunch">Business lunch</a-tag>
                <a-tag color="red" v-if="!data.business_lunch">No business lunch</a-tag>

                <div class="mt-3">
                    <a-typography-paragraph type="secondary">{{data.distance}}m</a-typography-paragraph>
                </div>
                <ShareButton   />
                <ClientOnly>
                   
                    <!-- <div class="flex flex-row justify-between">
                        <div>
                            <a-dropdown>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item key="1">Facebook</a-menu-item>
                                        <a-menu-item key="2">VK</a-menu-item>
                                        <a-menu-item key="3">Twitter</a-menu-item>
                                    </a-menu>
                                </template>
                                <a-button type="link">
                                    <ShareAltOutlined style="fontSize: 25px" />
                                </a-button>
                            </a-dropdown>
                        </div>
                        <p class="text-lg font-bold">{{data.price}}₽</p>
                    </div> -->
                </ClientOnly>


            </div>




        </article>

    </main>
</template>