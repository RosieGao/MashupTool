import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.config.debug = true

const state = {
    size: 'default canvas size',
};

const mutations = {
    CHANGE_CANVAS_SIZE(state, size){
        state.size = size
    }
};

const actions = {
    changeCanvasSize ({ commit }, size) {
        commit('CHANGE_CANVAS_SIZE', size)
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})
