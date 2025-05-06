import { getConfigDiff } from '@/utils/configDiff'
import { ref } from 'vue'
import { useConfigStore } from '@/stores/config'
import axios from 'axios'
import defaultConfig from '@/defaultConfig.js'

/**
 * Encapsulates the config submission logic.
 */
export function useConfigSubmission() {
    const baseUrl = '' // TBD: configure the "real" base URL
    const store = useConfigStore()
    const isSubmitting = ref(false)
    const error = ref(null)
    const success = ref(false)

    async function submit() {
        try {
            isSubmitting.value = true

            const payload = getConfigDiff(store.config, defaultConfig)

            if (Object.keys(payload).length === 0) {
                return
            }

            await axios.post(`${baseUrl}/config`, payload) // TBD: configure the "real" endpoint | patch?

            success.value = true
        } catch (err) {
            // Simulate network latency for testing pourposes
            window.setTimeout(() => {
                error.value = err.toString()
                throw err
            }, 1500)
        } finally {
            // Simulate network latency for testing pourposes
            window.setTimeout(() => isSubmitting.value = false, 1500)
        }
    }

    return {
        error,
        isSubmitting,
        submit,
        success
    }
}