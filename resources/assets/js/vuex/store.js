import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.debug = true;

export default store = new Vuex.Store({
    state: {
        canvas_size: '',
    },
    getters: {
        getCanvasSize(state) {
            return state.canvas_size
        }
    },
    mutations: {
        SET_CANVAS_SIZE(state, canvas_size) {
            state.canvas_size = canvas_size
        }
    },
});
