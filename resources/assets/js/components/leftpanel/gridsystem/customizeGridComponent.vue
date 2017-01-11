<template>
    <div class="gridSystem">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/customize.png">
            <span>Customize</span>
            <input type="text" class="form-control property" placeholder="12">
        </div>
        <div class="view">
            <div class="row">

            </div>
        </div>
    </div>
</template>

<style>
    .property{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
            }
        },
        computed:{

        }
    }
</script>
