<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Inline Checkboxes</span>
        </div>
        <div class="view">
            <form>
                <label class="checkbox-inline" contenteditable="true">
                    <input type="checkbox" id="inlineCheckbox1" value=""> option
                </label>
                <label class="checkbox-inline" contenteditable="true">
                    <input type="checkbox" id="inlineCheckbox2" value=""> option
                </label>
                <label class="checkbox-inline" contenteditable="true">
                    <input type="checkbox" id="inlineCheckbox3" value=""> option
                </label>
            </form>
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
