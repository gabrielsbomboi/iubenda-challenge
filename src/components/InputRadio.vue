<script setup>
// Data
const props = defineProps({
    label: { type: String, required: true },
    modelValue: { type: [String, Number], required: true },
    name: { type: String, required: true },
    value: { type: String, required: true }
})

const id = `input-${props.name}-${props.value}`

// Emitters
const emit = defineEmits(['update:modelValue'])

// Methods
function onChange() {
    emit('update:modelValue', props.value)
}
</script>

<template>
    <div class="input">
        <input
            :id="id"
            type="radio"
            :name="name"
            :value="value"
            :checked="props.modelValue === props.value"
            @change="onChange"
        >
        <label :for="id">{{ label }}</label>
    </div>
</template>
  
<style lang="scss" scoped>
.input {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    cursor: pointer;

    input,
    label {
        cursor: inherit;
    }
}
</style>