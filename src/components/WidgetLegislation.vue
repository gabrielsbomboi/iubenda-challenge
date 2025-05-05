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
            v-model="configStore.config.gdpr"
            name="gdpr"
            label="GDPR"
        />
        <InputCheckbox
            v-model="configStore.config.ccpa"
            name="ccpa"
            label="CCPA"
        />
    </WidgetFieldset>
</template>