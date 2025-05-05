<script setup>
// Dependencies
import { ref } from 'vue'
import { useConfigStore } from '@/stores/config'

// Components
import AppButton from '@/components/AppButton.vue'
import PreviewJson from '@/components/PreviewJson.vue'
import WidgetConsent from '@/components/WidgetConsent.vue'
import WidgetLegislation from '@/components/WidgetLegislation.vue'
import WidgetTargetCountries from '@/components/WidgetTargetCountries.vue'

// Data
const busy = ref(false)
const configStore = useConfigStore()

// Methods
function onReset() {
    configStore.resetConfig()
}
</script>

<template>
    <form
        id="wizard"
        class="wizard"
    >
        <header class="wizard__header">
            <h1>Configure your Cookie Solution</h1>
        </header>

        <main class="wizard__body">
            <aside class="wizard__aside">
                <WidgetTargetCountries />
                <WidgetLegislation />
                <WidgetConsent />
            </aside>

            <section class="wizard__preview">
                <PreviewJson />
            </section>
        </main>

        <footer class="wizard__footer">
            <a
                href="/help"
                class="wizard__help-link"
            >
                Read the documentation
            </a>

            <div class="wizard__actions">
                <AppButton
                    label="Reset"
                    :disabled="busy"
                    @click="onReset"
                />

                <AppButton
                    label="Save"
                    :loading="busy"
                />
            </div>
        </footer>
    </form>
</template>

<style lang="scss" scoped>
.wizard {
    --padding: 1.25rem;
    --border-radius: 1rem;

    display: grid;
    grid-template-rows: 5rem auto 5rem;
    grid-template-columns: 1fr;
    width: 100%;
    background-color: var(--secondary-background-color);

    @media (min-width: 1025px) {
        max-width: 1720px;
        border: 0.125rem solid var(--primary-border-color);
        border-radius: 1rem;

        &__header {
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        &__footer {
            border-radius: 0 0 var(--border-radius) var(--border-radius);
        }
    }

    &__header,
    &__aside,
    &__preview,
    &__footer {
        padding: var(--padding);
    }

    &__header,
    &__footer {
        background-color: var(--primary-background-color);
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        h1 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 500;
        }
    }

    &__body {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 48rem auto;

        @media (max-width: 1280px) {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
        }
    }

    &__aside   {
        display: flex;
        flex-direction: column;
        gap: var(--padding);
    }

    &__preview {
        border: solid var(--primary-background-color);
        border-width: 0.125rem 0 0 0;

        @media (min-width: 1279px) {
            border-width: 0 0 0 0.125rem;
        }
    }

    &__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--padding);
    }

    &__help-link {
        font-size: 0.875rem;
    }

    &__actions {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: var(--padding);
    }
}
</style>
