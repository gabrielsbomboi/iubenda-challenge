import { defineStore } from 'pinia'
import defaultConfig from '@/defaultConfig.js'

export const useConfigStore = defineStore('config', {
    state: () => ({
        config: { ...defaultConfig }
    }),
    actions: {
        resetConfig() {
            this.config = { ...defaultConfig }
        }
    }
})