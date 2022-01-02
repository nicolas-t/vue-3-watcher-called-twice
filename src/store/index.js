import { createStore } from 'vuex'

const getRandomString = () => {
    return (Math.random() + 1).toString(36).substring(7)
}
export default createStore({
    state: {
        sharedState: getRandomString(),
    },
    mutations: {
        modifySharedState(state) {
            state.sharedState = getRandomString()
        },
    },
    actions: {},
    modules: {},
})
