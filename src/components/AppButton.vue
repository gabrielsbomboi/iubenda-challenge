<script setup>
// Data
defineProps({
    disabled: { type: Boolean, required: false, default: false },
    label: { type: String, required: true },
    loading: { type: Boolean, required: false, default: false },
    type: { type: String, required: false, default: 'button' },
})
</script>

<template>
    <button
        :class="[
            'button', 
            { 
                'button--loading': loading
            }
        ]"
        :disabled="loading || disabled"
        :type="type"
    >
        <span class="button__label">{{ label }}</span>
        <div class="button__spinner">
            <span>&#8635;</span>
        </div>
    </button>
</template>

<style lang="scss" scoped>
.button {
    all: unset;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0.125rem solid var(--primary-border-color);
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease;

    * {
        pointer-events: none;
    }

    &__label,
    &__spinner {
        transition: opacity 0.2s ease;
    }

    &__label {
        font-size: 1rem;
        font-weight: 500;
    }

    &__spinner {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        opacity: 0;

        > span {
            @keyframes rotation {
                100% {
                    transform: rotate(360deg);
                }
            }

            font-size: 1.25rem;
            animation: rotation 1s linear infinite;
        }
    }

    &--loading {
        .button__label {
            opacity: 0;
        }

        .button__spinner {
            opacity: 1;
        }
    }

    &:not(.button--loading):hover {
        background-color: var(--secondary-background-color);
        cursor: pointer;
    }
}
</style>