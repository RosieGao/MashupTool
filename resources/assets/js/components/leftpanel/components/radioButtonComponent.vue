<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <i class="fa fa-dot-circle-o fa-5x"></i>
            <span>Radio Buttons</span>
        </div>
        <div class="view">
            <div class="radio">
                <label contenteditable="true">
                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1">
                    Option one is this and that, be sure to include why it's great
                </label>
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
