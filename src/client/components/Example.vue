<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">
        FiveM Vue 3 + Tailwind Template
      </h1>
      <p class="text-gray-600">
        This is an example component using Vue 3 and Tailwind CSS.
      </p>
      <button 
        @click="increment"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Count is: {{ count }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
</script> 