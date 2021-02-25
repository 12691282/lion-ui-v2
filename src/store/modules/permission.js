const permission = {
    
    state: () => ({
        count: 1
    }),
    getters: {

        getCount: state => state.count

    },
    
    mutations: {
        ADD_NUMB(state){
            state.count++
        },
        LESS_NUMB(state){
            state.count--
        }
    },
    actions:{
        addItem({commit}){
            commit("ADD_NUMB")
        },
        less_item({commit}){
            commit("LESS_NUMB")
        }
    }
}

export default permission