import { defineStore } from 'pinia'
import defaultConfig from '@/defaultConfig.js'

export const useConfigStore = defineStore('config', {
    state: () => ({
        config: { ...defaultConfig }
    }),
    actions: {
        resetConfig() {
            this.config = {
                ...defaultConfig,
                banner: { ...defaultConfig.banner }
            }
        }
    },
    getters: {
        isNonCompliantForItaly: state => {
            if (!['EU', 'world'].includes(state.config.targetCountries)) {
                return false
            }

            const { closeButtonDisplay, closeButtonRejects, rejectButtonDisplay } = state.config.banner

            return (
                (closeButtonDisplay && !closeButtonRejects) ||
                (!rejectButtonDisplay && !closeButtonDisplay) ||
                (rejectButtonDisplay && closeButtonDisplay && !closeButtonRejects)
            )
        },
        isNonCompliantForFrance: state => {
            return (
                ['EU', 'world'].includes(state.config.targetCountries) &&
                state.config.perPurposeConsent === false
            )
        },
        isNonCompliantForItalyAndFrance: state => {
            return (
                ['EU', 'world'].includes(state.config.targetCountries) &&
                state.config.consentByScroll === true
            )
        }
    }
})