<script setup>
// Dependencies
import { computed } from 'vue'

// Data
const props = defineProps({
    message: { type: String, required: true },
    type: {
        type: String,
        required: true,
        validator: val => ['error', 'success', 'warning'].includes(val)
    },
})

// Computed data
const icon = computed(() => {
    switch (props.type) {
        case 'error':
            return '❌'
        case 'success':
            return '✔️'
        case 'warning':
            return '⚠️'
        default:
            return ''
    }
})
</script>

<template>
    <div
        role="alert"
        :class="[
            'notification',
            `notification--${type}`, 
        ]"
    >
        <span class="notification__icon">{{ icon }}</span>
        <p> {{ message }}</p>
    </div>
</template>

<style lang="scss" scoped>
.notification {
    --background-color: #fff;
    --border-color: var(--app-font-color);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--app-padding);
    width: 100%;
    padding: var(--app-padding);
    background-color: var(--background-color);
    border: 0.125rem solid var(--border-color);
    border-radius: 0.5rem;
    color: var(--app-font-color);

    p {
        margin: 0;
    }

    &--error {
        --background-color: #fde6e6;
        --border-color: #ea5f5f;
    }

    &--success {
        --background-color: #d9f8d3;
        --border-color: #6db274;
    }

    &--warning {
        --background-color: #f8f6d3;
        --border-color: #d3b71c;
    }
}
</style>