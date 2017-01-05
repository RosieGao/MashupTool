<template>
    <div class="canvas ui-sortable">
        <button class="btn btn-default navbar-btn">
        </button>
        {{"Here is canvas"}}
        {{ size }}
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
    export default{
        data(){
            return{
            }
        },
        props: ['size'],
    }
</script>
