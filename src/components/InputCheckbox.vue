<script setup>
// Data
const props = defineProps({
    label: { type: String, required: true },
    modelValue: { type: Boolean, required: true },
    name: { type: String, required: true },
})

const id = `input-${props.name}`

// Emitters
const emit = defineEmits(['update:modelValue'])

// Methods
function onChange(evt) {
    emit('update:modelValue', evt.target.checked)
}
</script>

<template>
    <div class="input">
        <input
            :id="id"
            type="checkbox"
            :name="name"
            :checked="props.modelValue"
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
  
