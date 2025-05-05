<script setup>
// Dependencies
import { useConfigStore } from '@/stores/config'

// Components
import InputRadio from './InputRadio.vue';
import WidgetFieldset from './WidgetFieldset.vue'

// Data
const configStore = useConfigStore()
</script>

<template>
    <WidgetFieldset title="Target countries">
        <InputRadio
            v-model="configStore.config.targetCountries"
            name="target-countries"
            value="world"
            label="Worldwide"
        />
        <InputRadio
            v-model="configStore.config.targetCountries"
            name="target-countries"
            value="US"
            label="US users only"
        />
        <InputRadio
            v-model="configStore.config.targetCountries"
            name="target-countries"
            value="EU"
            label="EU users only"
        />
    </WidgetFieldset>
</template>