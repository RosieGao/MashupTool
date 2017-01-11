<template>
    <div class="canvas">
    </div>
</template>

<style>
    .canvas{
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        height: 100%;
        padding: 15px 20px;
        overflow-x: hidden;
    }
    .canvas .preview{
        display: none;
    }
</style>

<script>
    import store from '../vuex/store';

    export default{
        data(){
            return{
            }
        },

        computed: {
            size() {
                return store.state.size
            }
        },
    }
</script>
