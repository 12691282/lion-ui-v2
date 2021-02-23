const permission = {
    
    state: {
        count: 0
    },
    getters: {

        getCount: state => state.count

    },
    mutations: {
        addmu(state){
            state.count++
        },
        lessmu(state){
            state.count--
        }
    }
}

export default permission