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
    export default{
        data(){
            return{
                canvas_size: '',
            }
        },
        methods: {
            changeCanvasSize: function(canvas_size){
                this.canvas_size = canvas_size;
            },
        },
    }
</script>
