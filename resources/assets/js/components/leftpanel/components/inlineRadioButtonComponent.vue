<template>
    <div class="component inlineRadioButtonComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Inline Radio Buttons</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="# of options" v-model="userInputNumberOfOptions" v-on:keyup="customizeSelect">
            </div>
        </div>
        <div class="view">
            <form>
                <label class="radio-inline" contenteditable="true">
                    <input type="radio" value="">Option 1
                </label>
                <label class="radio-inline" contenteditable="true">
                    <input type="radio" value="">Option 2
                </label>
                <label class="radio-inline" contenteditable="true">
                    <input type="radio" value="">Option 3
                </label>
            </form>
        </div>
    </div>
</template>

<style>
    .inlineRadioButtonComponent .preview input{
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
                $(".leftPanel .inlineRadioButtonComponent form").empty();
                for(var count=0; count<parseInt(this.userInputNumberOfOptions); count++){
                    $(".leftPanel .inlineRadioButtonComponent form").append(
                    "<label class='radio-inline' contenteditable='true'><input type='radio' value=''>Option " + (count+1) +"</label>");
                }
            }
        }
    }
</script>
