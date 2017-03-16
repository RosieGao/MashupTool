<template>
    <div class="component selectComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/selectinput.png">
            <span>Selects</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="# of options" v-model="userInputNumberOfOptions" v-on:keyup="changeNumberOfOptions">
            </div>
        </div>
        <div class="view">
            <select class="form-control">
                <option>Option</option>
            </select>
        </div>
    </div>
</template>

<style>
    .selectComponent .preview input{
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
            changeNumberOfOptions: function(){
                $(".leftPanel .selectComponent select").empty();
                for(var count=0; count<parseInt(this.userInputNumberOfOptions); count++){
                    $(".leftPanel .selectComponent select").append("<option>Option " + (count+1) + "</option>");
                }
            }
        }
    }
</script>
