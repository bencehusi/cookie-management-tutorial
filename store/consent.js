export const state = () => ({
    necessary: true,
    statistics: false,
    marketing: false
})

export const getters = {
    getNecessary (state) {
        return state.necessary
    },
    getStatistics (state) {
        return state.statistics
    },
    getMarketing (state) {
        return state.marketing
    }
}

export const mutations = {
    setNecessary (state, payload) {
        state.necessary = payload
    },
    setStatistics (state, payload) {
        state.statistics = payload
    },
    setMarketing (state, payload) {
        state.marketing = payload
    }
}