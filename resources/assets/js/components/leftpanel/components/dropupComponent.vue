<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Dropups</span>
        </div>
        <div class="view">
            <div class="dropup">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" contenteditable="true">
                    Dropup
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><a href="#" contenteditable="true">Item</a></li>
                    <li><a href="#" contenteditable="true">Item</a></li>
                    <li><a href="#" contenteditable="true">Item</a></li>
                </ul>
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
