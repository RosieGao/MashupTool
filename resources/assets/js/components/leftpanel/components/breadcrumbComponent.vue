<template>
    <div class="component breadcrumbComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="breadcrumbEmpty" type="submit">Empty</button>
            <button class="btn btn-default btn-xs" id="breadcrumbAddChild" type="submit">Add child</button>
        </span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Breadcrumbs</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Amount" v-model="userInputAmount" v-on:keyup="changeAmount">
            </div>
        </div>
        <div class="view">
            <ol class="breadcrumb">
                <li><a href="#" contenteditable="true">Breadcrumb 1</a></li>
                <li><a href="#" contenteditable="true">Breadcrumb 2</a></li>
                <li class="active" contenteditable="true">Breadcrumb 3</li>
            </ol>
        </div>
    </div>
</template>

<style>
    .breadcrumbComponent .preview input{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
                userInputAmount: '',
            }
        },
        methods:{
            changeAmount: function(){
                $(".leftPanel .breadcrumbComponent .breadcrumb").empty();
                for(var count=0; count<parseInt(this.userInputAmount); count++){
                    if (count==parseInt(this.userInputAmount)-1){
                        $(".leftPanel .breadcrumbComponent .breadcrumb").append(
                        "<li class='active' contenteditable='true'>Breadcrumb " + (count+1) + "</li>");
                        continue;
                    }
                    $(".leftPanel .breadcrumbComponent .breadcrumb").append(
                    "<li><a href='#' contenteditable='true'>Breadcrumb " + (count+1) + "</a></li>");
                }
            }
        }
    }
</script>
