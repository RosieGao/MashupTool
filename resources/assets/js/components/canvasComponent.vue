<template>
    <div class="canvas ui-sortable">
        {{"Here is canvas"}}
        <pre>{{ $data | json}}</pre>
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
    }
</script>
