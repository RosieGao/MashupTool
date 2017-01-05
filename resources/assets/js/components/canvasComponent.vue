<template>
    <div class="canvas ui-sortable">
        <div>{{"Here is canvas"}}</div>
        <div>{{ size }}</div>
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
            }
        },

        computed: {
            size() {
                return store.state.size
            }
        },
    }
</script>
