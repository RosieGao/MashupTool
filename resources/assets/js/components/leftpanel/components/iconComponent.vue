<template>
    <div class="component iconComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <i class="fas fa-icons fa-5x"></i>
            <span>Icons</span>
            <input type="text" class="form-control" placeholder="font awesome" v-model="userInputFontAwesomeClass" v-on:keyup="addFontAwesomeClass">
        </div>
        <div class="view">
            <i class="fas fa-icons fa-5x"></i>
        </div>
    </div>
</template>

<style>
    .iconComponent .preview input{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
                userInputFontAwesomeClass: '',
            }
        },
         methods:{
            addFontAwesomeClass: function(){
                $(".leftPanel .iconComponent .view").empty();
                $(".leftPanel .iconComponent .view").append(
                    "<i class='fas " + this.userInputFontAwesomeClass + " fa-5x'></i>")
            }
        }
    }
</script>
