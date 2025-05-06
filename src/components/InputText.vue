<script setup>
// Data
const props = defineProps({
    label: { type: String, required: true },
    modelValue: { type: [String, Number], required: true },
    name: { type: String, required: true },
})

const id = `input-${props.name}`

// Emitters
const emit = defineEmits(['update:modelValue'])

// Methods
function onChange(evt) {
    emit('update:modelValue', evt.target.value)
}
</script>

<template>
    <div class="input">
        <label :for="id">{{ label }}</label>
        <input
            :id="id"
            type="text"
            :name="name"
            :value="modelValue"
            @input="onChange"
        >
    </div>
</template>

<style lang="scss" scoped>
.input {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    label::after {
        content: ":";
    }
}
</style>