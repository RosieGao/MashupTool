<template>
    <div class="btn-group canvasSelector">
        <button class="btn btn-default navbar-btn" v-on:click="changeCanvasSize('defaultSize')">
            <i class="fa fa-arrows-alt"></i>
        </button>
        <button class="btn btn-default navbar-btn" v-on:click="changeCanvasSize('lgSize')">
            <i class="fa fa-desktop"></i>
        </button>
        <button class="btn btn-default navbar-btn" v-on:click="changeCanvasSize('mdSize')">
            <i class="fa fa-laptop"></i>
        </button>
        <button class="btn btn-default navbar-btn" v-on:click="changeCanvasSize('smSize')">
            <i class="fa fa-tablet"></i>
        </button>
        <button class="btn btn-default navbar-btn" v-on:click="changeCanvasSize('xsSize')">
            <i class="fa fa-mobile-phone"></i>
        </button>
    </div>
</template>

<style>
    .canvasSelector{
        margin-left: 15px;
    }
</style>

<script>
    import store from '../vuex/store';
    export default{
        data(){
            return{
            }
        },

        methods: {
            changeCanvasSize: function(selected_size){
                store.dispatch('changeCanvasSize', selected_size)
                console.log(store.state.size)
            }
        }
    }
</script>
