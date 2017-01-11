<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/choosefiles.png">
            <span>Choose Files</span>
        </div>
        <div class="view">
            <div class="form-group">
                <label contenteditable="true">File input</label>
                <input type="file">
                <p class="help-block" contenteditable="true">Example block-level help text here.</p>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return{
            }
        },
    }
</script>
