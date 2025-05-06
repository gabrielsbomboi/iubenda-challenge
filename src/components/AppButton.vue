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
                'button--loading': loading,
                'button--disabled': disabled
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
    // Regular
    --button-border-color: var(--tertiary-color);
    --button-background-color: var();
    --button-font-color: var(--app-font-color);

    // Hovered
    --button-border-color-hover: var(--tertiary-color);
    --button-background-color-hover: var(--primary-color);
    --button-font-color-hover: var(--app-font-color);

    // Disabled
    --button-border-color-disabled: #cfcfcf;
    --button-background-color-disabled: #cfcfcf;
    --button-font-color-disabled: #fff;
    
    all: unset;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0.125rem solid var(--button-border-color);
    background-color: var(--button-background-color);
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
        color: var(--button-font-color);
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
        color: var(--button-font-color);

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
        pointer-events: none;

        .button__label {
            opacity: 0;
        }

        .button__spinner {
            opacity: 1;
        }
    }
    
    &--disabled {
        border-color: var(--button-border-color-disabled);
        background-color: var(--button-background-color-disabled);
        pointer-events: none;

        .button__label {
            color: var(--button-font-color-disabled);
        }
    }

    @media (width >= 1025px) {
        &:hover {
            border-color: var(--button-border-color-hover);
            background-color: var(--button-background-color-hover);
            cursor: pointer;

            .button__label {
                color: var(--button-font-color-hover);
            }
        }
    }
}
</style>