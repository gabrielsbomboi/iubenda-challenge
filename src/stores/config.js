import { defineStore } from 'pinia'
import defaultConfig from '@/defaultConfig.js'

export const useConfigStore = defineStore('config', {
    state: () => ({
        config: { ...defaultConfig }
    }),
    actions: {
        // updateConfig(newConfig) {
        //     this.$patch(state => Object.assign(state.config, newConfig))
        // },
        resetConfig() {
            this.config = { ...defaultConfig }
        }
    }
})