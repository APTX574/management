import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: { status: 0, temp: {} },

    mutations: {
        toprofile(state) {
            state.status = 0
        },
        tobasic(state) {
            state.status = 1
        },
        togrades(state) {
            state.status = 2
        },
        tolessons(state) {
            state.status = 3
        },
        tosocial(state) {
            state.status = 4
        },
        towork(state) {
            state.status = 5
        },
        tophysicalquality(state) {
            state.status = 6
        },
        toeconomy(state) {
            state.status = 7
        },
        toskill(state) {
            state.status = 8
        },
        rebirthtrans(state, row) {
            state.temp = row
        }
    }
})