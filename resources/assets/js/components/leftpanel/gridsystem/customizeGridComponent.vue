<template>
    <div class="gridSystem">
        <a href="#close" class="removeButton" v-show="removeButtonShow"><i class="fa fa-times"></i></a>
        <a href="#close" class="dragButton" v-show="dragButtonShow"><i class="fa fa-arrows"></i></a>
        <div class="preview" v-show="previewShow">
            <img src="/images/customize.png">
            <a href="#">Customize</a>
            <input type="text" class="form-control property" placeholder="12">
        </div>
        <div class="view" v-show="viewShow">
            <div class="row">

            </div>
        </div>
    </div>
</template>

<style>
    .gridSystem{
        display: inline-block;
        width: 49%;
    }
    .preview{
        cursor: pointer;
        width: 120px;
        height: 140px;
        font-size: 13px;
        text-align: center;
        background-repeat: no-repeat;
        padding: 10px 20px 10px;
        overflow: hidden;
    }
    .property{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
                removeButtonShow: false,
                dragButtonShow: false,
                previewShow: true,
                viewShow: false,
            }
        },
        computed:{

        }
    }
</script>
