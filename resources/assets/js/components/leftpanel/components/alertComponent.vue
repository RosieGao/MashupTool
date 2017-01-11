<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <i class="fa fa-exclamation-triangle fa-5x"></i>
            <span>Alerts</span>
        </div>
        <div class="view">
            <div class="alert alert-success" role="alert" contenteditable="true"> <strong>Well done!</strong> You successfully read this important alert message. </div>
            <div class="alert alert-info" role="alert" contenteditable="true"> <strong>Heads up!</strong> This alert needs your attention, but it's not super important. </div>
            <div class="alert alert-warning" role="alert" contenteditable="true"> <strong>Warning!</strong> Better check yourself, you're not looking too good. </div>
            <div class="alert alert-danger" role="alert" contenteditable="true"> <strong>Oh snap!</strong> Change a few things up and try submitting again. </div>
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
