<script setup>
// Dependencies
import { ref, computed } from 'vue'
import { useConfigStore } from '@/stores/config'
import { useConfigSubmission } from '@/composables/useConfigSubmission'

// Components
import AppButton from '@/components/AppButton.vue'
import NotificationInline from '@/components/NotificationInline.vue'
import PreviewJson from '@/components/PreviewJson.vue'
import WidgetBanner from '@/components/WidgetBanner.vue'
import WidgetConsent from '@/components/WidgetConsent.vue'
import WidgetLegislation from '@/components/WidgetLegislation.vue'
import WidgetTargetCountries from '@/components/WidgetTargetCountries.vue'

// Data
const configStore = useConfigStore()
const { error, isSubmitting, submit, success } = useConfigSubmission()
const lastSavedConfig = ref(JSON.stringify(configStore.config))

// Computed data
const isDirty = computed(() =>
    !(JSON.stringify(configStore.config) !== lastSavedConfig.value)
)

const complianceMessage = computed(() => {
    if (configStore.isNonCompliantForItaly) {
        return 'Your selected settings are not compliant with laws in Italy.'
    }

    if (configStore.isNonCompliantForFrance) {
        return 'Your selected settings are not compliant with laws in France.'
    }

    if (configStore.isNonCompliantForItalyAndFrance) {
        return 'Your selected settings are not compliant with laws in France and Italy.'
    }

    return null
})

// Methods
function onReset() {
    configStore.resetConfig()
    error.value = null
    success.value = null
    lastSavedConfig.value = JSON.stringify(configStore.config)
}

async function onSubmit() {
    error.value = null
    success.value = null
    await submit(configStore.config)
    lastSavedConfig.value = JSON.stringify(configStore.config)
}
</script>

<template>
    <form
        id="wizard"
        class="wizard"
        @submit.prevent="onSubmit"
    >
        <header class="wizard__header">
            <h1>Configure your Cookie Solution</h1>
        </header>

        <main class="wizard__body">
            <section class="wizard__control-panel">
                <NotificationInline
                    v-if="complianceMessage"
                    :message="complianceMessage"
                    type="warning"
                />

                <WidgetTargetCountries :disabled="isSubmitting" />
                <WidgetLegislation :disabled="isSubmitting" />
                <WidgetConsent :disabled="isSubmitting" />
                <WidgetBanner :disabled="isSubmitting" />
            </section>

            <output class="wizard__preview">
                <PreviewJson />
            </output>
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
                    :disabled="isSubmitting"
                    label="Reset"
                    @click="onReset"
                />

                <AppButton
                    :disabled="isDirty"
                    :loading="isSubmitting"
                    label="Save"
                    type="submit"
                />
            </div>
        </footer>
    </form>

    <NotificationInline
        v-if="success"
        message="Your configuration has been saved."
        type="success"
    />
    
    <NotificationInline
        v-if="error"
        :message="error"
        type="error"
    />
</template>

<style lang="scss" scoped>
.wizard {
    --padding: 1.25rem;
    --border-radius: 1rem;

    display: grid;
    grid-template-rows: 5rem auto 5rem;
    grid-template-columns: 1fr;
    width: 100%;
    background-color: var(--primary-color);

    @media (min-width: 1025px) {
        border: 0.125rem solid var(--tertiary-color);
        border-radius: 1rem;

        &__header {
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        &__footer {
            border-radius: 0 0 var(--border-radius) var(--border-radius);
        }
    }

    &__header,
    &__control-panel,
    &__preview,
    &__footer {
        padding: var(--padding);
    }

    &__header,
    &__footer {
        background-color: var(--secondary-color);

        @media (max-width: 768px) {
            position: sticky;
        }
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

        @media (max-width: 768px) {
            top: 0;
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

    &__control-panel   {
        display: flex;
        flex-direction: column;
        gap: var(--padding);
    }

    &__preview {
        border: solid var(--secondary-color);
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

        @media (max-width: 768px) {
            bottom: 0;
        }
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
