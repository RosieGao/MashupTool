<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Breadcrumbs</span>
        </div>
        <div class="view">
            <ol class="breadcrumb">
                <li><a href="#" contenteditable="true">breadcrumb</a></li>
                <li><a href="#" contenteditable="true">breadcrumb</a></li>
                <li class="active" contenteditable="true">breadcrumb</li>
            </ol>
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
