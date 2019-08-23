
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('file-saver');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

import store from './vuex/store';

import canvas_selector_component from './components/canvasSelectorComponent.vue';
import canvas_component from './components/canvasComponent.vue';
import left_panel_component from './components/leftpanel/leftPanelComponent.vue';
import property_panel_component from './components/propertyPanelComponent.vue';

const app = new Vue({
    el: '#app',

    store,

    data() {
        return {
        }
    },

    components:{
        canvas_selector_component,
        canvas_component,
        left_panel_component,
        property_panel_component
    },
});
