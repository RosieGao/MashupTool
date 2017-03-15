<template>
    <div class="component inlineCheckboxComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Inline Checkboxes</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="# of options" v-model="userInputNumberOfOptions" v-on:keyup="customizeSelect">
            </div>
        </div>
        <div class="view">
            <form>
                <label class="checkbox-inline" contenteditable="true">
                    <input type="checkbox" value="">Option 1
                </label>
                <label class="checkbox-inline" contenteditable="true">
                    <input type="checkbox" value="">Option 2
                </label>
                <label class="checkbox-inline" contenteditable="true">
                    <input type="checkbox" value="">Option 3
                </label>
            </form>
        </div>
    </div>
</template>

<style>
    .inlineCheckboxComponent .preview input{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
                userInputNumberOfOptions: '',
            }
        },
         methods:{
            customizeSelect: function(){
                $(".leftPanel .inlineCheckboxComponent form").empty();
                for(var count=0; count<parseInt(this.userInputNumberOfOptions); count++){
                    $(".leftPanel .inlineCheckboxComponent form").append(
                    "<label class='checkbox-inline' contenteditable='true'><input type='checkbox' value=''>Option " + (count+1) +"</label>");
                }
            }
        }
    }
</script>
