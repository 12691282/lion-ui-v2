import {routeArr} from '@/data'
import Layout from '@/layout'

const state = {
    isLoad: false,
    count: 0
}
const getters = {
    getCount: state => state.count
}

const mutations =  {
    ADD_NUMB(state){
        state.count++
    },
    LESS_NUMB(state){
        state.count--
    }
}
const actions = {
    addItem({commit}){
        commit("ADD_NUMB")
    },
    lessItem({commit}){
        commit("LESS_NUMB")
    },
    // 生成路由
    GenerateRoutes({ state, commit }) {
        return new Promise((resolve, reject) => {
            if(!state.isLoad){
                const routeList = filterAsyncParentRoute(routeArr)
                resolve(routeList)
            }
        })
    }
}

const filterAsyncParentRoute  = (_routeArr) => 
     _routeArr.filter(route => {
        console.log(route)
    })



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }