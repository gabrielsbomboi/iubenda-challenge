<script setup>
// Dependencies
import { computed } from 'vue'
import { useConfigStore } from '@/stores/config'

// Data
const configStore = useConfigStore()

// Computed data
const formattedJson = computed(() => JSON.stringify(configStore.config, null, 4))
</script>

<template>
    <pre class="preview-json">{{ formattedJson }}</pre>
</template>

<style lang="scss" scoped>
.preview-json {
    overflow-y: auto;
}
</style>