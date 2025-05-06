<script setup>
// Data
defineProps({
    disabled: { type: Boolean, required: false, default: false },
    title: { type: String, required: true }
})
</script>

<template>
    <fieldset
        :disabled="disabled"
        class="widget"
    >
        <legend>{{ title }}</legend>

        <div class="widget__content">
            <slot />
        </div>
    </fieldset>
</template>

<style lang="scss" scoped>
.widget {
    all: unset;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.125rem;
    background-color: var(--secondary-color);

    legend {
        all: unset;
        float: left; 
        font-size: 1rem;
        font-weight: 600;
    }

    &__content {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: var(--app-padding);

        @media (width >= 768px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
</style>