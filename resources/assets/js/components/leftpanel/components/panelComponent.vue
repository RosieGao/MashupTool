<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/panel.png">
            <span>Panels</span>
        </div>
        <div class="view">
            <div class="panel panel-default">
                <div class="panel-body" contenteditable="true">
                    Panel content
                </div>
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
