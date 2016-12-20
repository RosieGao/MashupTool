<template>
    <div>
        <slot></slot>
        <div>this is template body</div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
    }
</script>
