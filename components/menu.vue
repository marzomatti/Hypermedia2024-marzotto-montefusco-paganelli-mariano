<template>
    <nav class="font-mono">
        <ul class="flex space-x-4">
            <li>
                <NuxtLink to="/" class="link">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/people/" class="link">People</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/Activities/" class="link">Activities</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/" class="link">Chatbot</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact" class="link">Contact us</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="link">About us</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.link {
@apply p-1 hover:bg-gray-200
}
</style>