<script setup>
// Data
defineProps({
    message: { type: String, required: true },
})

</script>

<template>
    <div class="notification-error">
        <p>{{ message }}</p>
    </div>
</template>

<style lang="scss" scoped>
.notification-error {
    width: 100%;
    padding: 1.25rem;
    background-color: #fde6e6;
    border: 0.125rem solid #ea5f5f;
    border-radius: 0.5rem;
    color: #ea5f5f;

    p {
        margin: 0;
    }
}
</style>