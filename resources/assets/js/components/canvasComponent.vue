<template>
    <div class="canvas">
    </div>
</template>

<style>
    .canvas{
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        height: 100%;
    }
</style>

<script>
    import store from '../vuex/store';

    export default{
        data(){
            return{
                removeButtonShow: false,
                dragButtonShow: false,
                propertiesShow: false,
                previewShow: false,
                viewShow: true,
            }
        },

        computed: {
            size() {
                return store.state.size
            }
        },
    }
</script>
