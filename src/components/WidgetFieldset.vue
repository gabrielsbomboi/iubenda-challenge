<script setup>
// Data
defineProps({
    title: { type: String, required: true }
})
</script>

<template>
    <fieldset class="widget">
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
    background-color: var(--primary-background-color);

    legend {
        all: unset;
        float: left; 
        font-size: 1rem;
        font-weight: 600;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;

        @media (min-width: 1025px) {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }
    }
}
</style>