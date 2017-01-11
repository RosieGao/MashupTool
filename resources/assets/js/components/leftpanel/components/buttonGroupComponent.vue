<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Button Groups</span>
        </div>
        <div class="view">
            <div class="btn-group" role="group" aria-label="Button group" id="buttongroup">
                <button type="button" class="btn btn-default" contenteditable="true">Button group</button>
                <button type="button" class="btn btn-default" contenteditable="true">Button group</button>
                <button type="button" class="btn btn-default" contenteditable="true">Button group</button>
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
