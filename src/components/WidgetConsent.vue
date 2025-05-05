<script setup>
// Dependencies
import { useConfigStore } from '@/stores/config'

// Components
import InputCheckbox from './InputCheckbox.vue';
import WidgetFieldset from './WidgetFieldset.vue'

// Data
const configStore = useConfigStore()
</script>

<template>
    <WidgetFieldset title="Legislation">
        <InputCheckbox
            v-model="configStore.config.consentByScroll"
            name="consent-by-scroll"
            label="Consent by scroll"
        />
        <InputCheckbox
            v-model="configStore.config.perPurposeConsent"
            name="per-purpose-consent"
            label="Per purpose consent"
        />
    </WidgetFieldset>
</template>