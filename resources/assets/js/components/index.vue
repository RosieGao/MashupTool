<template>
    <div class='index'>
        <slot></slot>
        <h1 class="red">{{ message }}</h1>
        <div>This is template body</div>
    </div>
</template>

<style>
    .index{
        background-color:#A9A9A9;
    }
    .red {
        color: #f00;
    }
</style>

<script>
    export default{
        data(){
            return{
                message:'Hello Rosie!'
            }
        }
    }
</script>
