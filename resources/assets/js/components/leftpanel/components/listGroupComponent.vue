<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <i class="fa fa-list fa-5x"></i>
            <span>List group</span>
        </div>
        <div class="view">
            <div class="list-group">
                <li class="list-group-item" contenteditable="true">List group item</li>
                <li class="list-group-item" contenteditable="true">List group item</li>
                <li class="list-group-item" contenteditable="true">List group item</li>
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
