import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.config.debug = true

const state = {
    canvasSize: 'origin'
};

const mutations = {
    CHANGE_CANVAS_SIZE(state, canvas_size){
        state.canvasSize = canvas_size
    }
};

export default new Vuex.Store({
    state,
    mutations,
})
