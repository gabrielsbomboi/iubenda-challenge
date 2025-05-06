import { getConfigDiff } from '../../src/utils/configDiff.js'
import defaultConfig from '../../src/defaultConfig.js'

describe('utils > configDiff > getConfigDiff', () => {
    it('returns only changed keys', () => {
        const modifiedConfig = { ...defaultConfig, gdpr: !defaultConfig.gdpr }
        const diff = getConfigDiff(modifiedConfig, defaultConfig)
        expect(diff).toEqual({ gdpr: modifiedConfig.gdpr })
    })

    it('returns empty object when no changes', () => {
        const diff = getConfigDiff(defaultConfig, defaultConfig)
        expect(Object.keys(diff).length).toBe(0)
    })
})