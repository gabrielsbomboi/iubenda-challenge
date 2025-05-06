import { setActivePinia, createPinia } from 'pinia'
import { useConfigStore } from '../../src/stores/config.js'
import defaultConfig from '../../src/defaultConfig.js'

describe('stores > config > useConfigStore', () => {
    let store

    beforeEach(() => {
        setActivePinia(createPinia())
        store = useConfigStore()
    })

    it('initializes state from defaultConfig', () => {
        expect(store.config).toEqual(defaultConfig)
    })

    it('resetConfig restores defaultConfig deeply', () => {
        store.config.targetCountries = 'US'
        store.config.banner.title = 'Foo'
        store.resetConfig()
        expect(store.config).toEqual(defaultConfig)
        expect(store.config.banner).not.toBe(defaultConfig.banner)
    })

    describe('isNonCompliantForItaly', () => {
        it('is false when targetCountries is not EU or world', () => {
            store.config.targetCountries = 'US'
            expect(store.isNonCompliantForItaly).toBe(false)
        })

        it('is true when closeButtonDisplay && !closeButtonRejects', () => {
            store.config.targetCountries = 'EU'
            store.config.banner.closeButtonDisplay = true
            store.config.banner.closeButtonRejects = false
            store.config.banner.rejectButtonDisplay = false
            expect(store.isNonCompliantForItaly).toBe(true)
        })

        it('is true when !rejectButtonDisplay && !closeButtonDisplay', () => {
            store.config.targetCountries = 'world'
            store.config.banner.rejectButtonDisplay = false
            store.config.banner.closeButtonDisplay  = false
            expect(store.isNonCompliantForItaly).toBe(true)
        })

        it('is true when rejectButtonDisplay && closeButtonDisplay && !closeButtonRejects', () => {
            Object.assign(store.config, {
                targetCountries: 'EU',
                banner: {
                    rejectButtonDisplay: true,
                    closeButtonDisplay:  true,
                    closeButtonRejects:  false,
                    title: defaultConfig.banner.title
                }
            })
            expect(store.isNonCompliantForItaly).toBe(true)
        })
    })

    describe('isNonCompliantForFrance', () => {
        it('is false if targetCountries not in [EU, world]', () => {
            store.config.targetCountries = 'US'
            store.config.perPurposeConsent = false
            expect(store.isNonCompliantForFrance).toBe(false)
        })

        it('is true when in EU/world & perPurposeConsent is false', () => {
            store.config.targetCountries    = 'world'
            store.config.perPurposeConsent = false
            expect(store.isNonCompliantForFrance).toBe(true)
        })

        it('is false when perPurposeConsent is true', () => {
            store.config.targetCountries    = 'EU'
            store.config.perPurposeConsent = true
            expect(store.isNonCompliantForFrance).toBe(false)
        })
    })

    describe('isNonCompliantForItalyAndFrance', () => {
        it('is false if targetCountries not in [EU, world]', () => {
            store.config.targetCountries = 'US'
            store.config.consentByScroll = true
            expect(store.isNonCompliantForItalyAndFrance).toBe(false)
        })

        it('is true when in EU/world & consentByScroll is true', () => {
            store.config.targetCountries = 'EU'
            store.config.consentByScroll = true
            expect(store.isNonCompliantForItalyAndFrance).toBe(true)
        })

        it('is false when consentByScroll is aflse', () => {
            store.config.targetCountries = 'world'
            store.config.consentByScroll = false
            expect(store.isNonCompliantForItalyAndFrance).toBe(false)
        })
    })
})