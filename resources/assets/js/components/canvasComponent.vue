<template>
    <div class="canvas">
    </div>
</template>

<style>
    .mashupLayout .canvas{
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        height: 100%;
        padding: 15px 20px;
        overflow-x: hidden;
    }
    .canvas .removeButton{
        margin-left: 10px;
    }
    .canvas .dragButton{
        margin-left: 10px;
    }
    .canvas .editorButton{
        margin-left: 10px;
    }
    .canvas .properties{
        margin-left: 10px;
    }
    .canvas .innerElementProperties{
        margin-left: 63px;
        margin-top: 10px;
    }
    .canvas .preview{
        display: none;
    }
    .canvas .view{
        margin-top: 10px;
        margin-bottom: 10px;
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
