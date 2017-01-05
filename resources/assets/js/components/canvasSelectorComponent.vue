<template>
    <div class="btn-group canvasSelector">
        <button class="btn btn-default navbar-btn" >
            <i class="fa fa-arrows-alt"></i>
        </button>
        <button class="btn btn-default navbar-btn" >
            <i class="fa fa-desktop"></i>
        </button>
        <button class="btn btn-default navbar-btn" >
            <i class="fa fa-laptop"></i>
        </button>
        <button class="btn btn-default navbar-btn" >
            <i class="fa fa-tablet"></i>
        </button>
        <button class="btn btn-default navbar-btn" >
            <i class="fa fa-mobile-phone"></i>
            {{canvasSize}}
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
    import {changeCanvasSize} from '../vuex/actions';
    export default{
        data(){
            return{
            }
        },

        vuex: {
            getters: {
                canvasSize: state => store.state.canvasSize
            },
            actions: {
                changeCanvasSize
            }
        }
    }
</script>
