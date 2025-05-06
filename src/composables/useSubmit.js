import { ref } from 'vue'

export function useSubmit() {
    const isSubmitting = ref(false)

    async function submit() {
        try {
            isSubmitting.value = true
        } finally {
            window.setTimeout(() => {
                isSubmitting.value = false
            }, 1000)
        }
    }

    return { isSubmitting, submit }
}