<template>
    <div class="relative">
        <button @mouseenter="open" 
            class="relative z-10 block h-11 w-11 overflow-hidden focus:outline-none focus:border-white">
            <ShareAltOutlined style="font-size: 25px; color:rgb(0, 102, 255)" />
        </button>
        <div v-if="isOpen" @mouseleave="hide" class="absolute left-10 p-1 top-[-100px] w-48 bg-white rounded-lg shadow-xl">
            <div @click="initiateShare('https://www.facebook.com/sharer.php?u=')" class="dropdownOption">Facebook</div>
            <div @click="initiateShare('https://twitter.com/intent/tweet?url=')" class="dropdownOption">Twitter</div>
            <div @click="initiateShare('https://vk.com/share.php?url=')" class="dropdownOption">VK</div>
        </div>
    </div>
</template>
  
<script setup lang="ts">

const isOpen = ref(false);
const open = () => {
    isOpen.value = true
}

const hide = () => { 
    isOpen.value = false
}

const initiateShare = (url: string) => { 
    share(url);
}


</script>

<style>
    @tailwind components; 
    .dropdownOption { 
        @apply block px-2 py-2 cursor-pointer text-gray-800 hover:bg-blue-500 rounded-md hover:text-white
    }
</style>