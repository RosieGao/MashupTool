<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Inline Radio Buttons</span>
        </div>
        <div class="view">
            <form>
                <label class="radio-inline" contenteditable="true">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value=""> option
                </label>
                <label class="radio-inline" contenteditable="true">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value=""> option
                </label>
                <label class="radio-inline" contenteditable="true">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value=""> option
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
