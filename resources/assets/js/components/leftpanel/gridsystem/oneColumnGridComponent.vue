<template>
    <div class="gridSystem">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="https://yumeng1-vm.ead.ist.ualberta.ca/MashupTool/images/onecolumn.png">
            <span>One Column</span>
            <input readonly type="text" class="form-control" placeholder="12">
        </div>
        <div class="view">
            <div class="row">
                <div class="column col-xs-12 columndef12">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .gridSystem .preview input{
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
    }
</script>
