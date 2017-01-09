<template>
    <div class="gridSystem ui-draggable ">
        <a href="#close" class="removeButton" v-show="removeButtonShow"><i class="fa fa-times"></i></a>
        <a href="#close" class="dragButton" v-show="dragButtonShow"><i class="fa fa-arrows"></i></a>
        <span v-show="propertiesShow">
            <form class="form-inline">
                <div class="form-group">
                    <label for="gridcustomize">Customize</label>
                    <input type="text" class="form-control" id="gridcustomize">
                </div>
            </form>
        </span>
        <div class="preview" v-show="previewShow">
            <img src="/images/onecolumn.png">
            <a href="#">One Column</a>
        </div>
        <div v-show="viewShow">
            <div class="row">
                <div class="column ui-sortable col-xs-12 columndef12">
                </div>
            </div>
        </div>s
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
        height: 120px;
        font-size: 13px;
        text-align: center;
        background-repeat: no-repeat;
        padding: 10px 20px 10px;
        overflow: hidden;
    }
    .canvas .row{
        background-color: #F5F5F5;
        border: 1px solid #DDDDDD;
        border-radius: 4px 0 4px 0;
        color: #9DA0A4;
        content: "Row";
        font-size: 12px;
        font-weight: bold;
        left: -1px;
        line-height: 2;
        padding: 1px 5px;
        position: absolute;
        top: -1px;
    }
</style>

<script>
    export default{
        data(){
            return{
                removeButtonShow: false,
                dragButtonShow: false,
                propertiesShow: false,
                previewShow: true,
                viewShow: false,

            }
        },
    }
</script>
