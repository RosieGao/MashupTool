<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <i class="fa fa-check-square-o fa-5x"></i>
            <span>Checkboxes</span>
        </div>
        <div class="view">
            <form>
                <div class="checkbox">
                    <label contenteditable="true">
                        <input type="checkbox" value="">
                        Option
                    </label>
                </div>
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
