import { createStore } from 'vuex'
import permission from './modules/permission'

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        addmu(state){
            state.count++
        },
        lessmu(state){
            state.count--
        }
    },
    actions: {
    },
    modules: {
        permission
    }
})
