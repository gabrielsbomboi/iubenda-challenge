import { setActivePinia, createPinia } from 'pinia'
import { useConfigStore } from '../../src/stores/config.js'
import { useConfigSubmission } from '../../src/composables/useConfigSubmission.js'
import axios from 'axios'
import defaultConfig from '../../src/defaultConfig.js'

describe('composables > useConfigSubmission', () => {
    let configStore
    let error, isSubmitting, success, submit

    beforeEach(() => {
        setActivePinia(createPinia())
        configStore = useConfigStore()

        spyOn(axios, 'post').and.returnValue(Promise.resolve({ data: {} }))

        // Stubs setTimeout to execute the callback immediately
        spyOn(window, 'setTimeout').and.callFake(cb => {
            try { cb() } catch { /* swallow */ }
        })

        ;({ error, isSubmitting, success, submit } = useConfigSubmission())
    })

    it('does not submit anything if the configuration does not change', async () => {
        configStore.config = { ...defaultConfig }
        expect(axios.post).not.toHaveBeenCalled()
        await submit()
        expect(success.value).toBe(false)
        expect(isSubmitting.value).toBe(false)
    })

    it('sends only the difference and sets success to true', async () => {
        configStore.config = { ...defaultConfig, gdpr: !defaultConfig.gdpr }
        axios.post.and.returnValue(Promise.resolve({ data: {} }));
        await submit()
        const expected = { gdpr: configStore.config.gdpr }
        expect(axios.post).toHaveBeenCalledWith('/config', expected) // TBD: configure the "real" endpoint
        expect(success.value).toBe(true)
        expect(isSubmitting.value).toBe(false)
    })

    it('handles errors and updates error reference', async () => {
        configStore.config = { ...defaultConfig, gdpr: !defaultConfig.gdpr };
        axios.post.and.returnValue(Promise.reject(new Error('fail')));
        await submit();
        expect(error.value).toContain('Error: fail');
        expect(isSubmitting.value).toBe(false);
    })
})