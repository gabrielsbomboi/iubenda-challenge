<script setup>
// Dependencies
import { useConfigStore } from '@/stores/config'

// Components
import InputCheckbox from './InputCheckbox.vue';
import WidgetFieldset from './WidgetFieldset.vue'
import InputText from './InputText.vue';

// Data
const configStore = useConfigStore()
</script>

<template>
    <WidgetFieldset title="Banner">
        <InputCheckbox
            v-model="configStore.config.banner.acceptButtonDisplay"
            name="accept-button-display"
            label="Accept button display"
        />
        <InputCheckbox
            v-model="configStore.config.banner.rejectButtonDisplay"
            name="reject-button-display"
            label="Reject button display"
        />
        <InputCheckbox
            v-model="configStore.config.banner.closeButtonDisplay"
            name="close-button-display"
            label="Close button display"
        />
        <InputCheckbox
            v-model="configStore.config.banner.closeButtonRejects"
            name="close-button-rejects"
            label="Close button rejects"
        />

        <InputText
            v-model="configStore.config.banner.title"
            name="title"
            label="Title"
        />
    </WidgetFieldset>
</template>