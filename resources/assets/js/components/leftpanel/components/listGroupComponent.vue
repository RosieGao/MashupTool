<template>
    <div class="component listGroupComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="listGroupEmpty" type="submit">Empty</button>
            <button class="btn btn-default btn-xs" id="listGroupAddItems" type="submit">Add Items</button>
            <button class="btn btn-default btn-xs" id="listGroupAddLinkItems" type="submit">Add Link Items</button>
            <button class="btn btn-default btn-xs" id="listGroupAddButtonItems" type="submit">Add Button Items</button>
            <button class="btn btn-default btn-xs" id="listGroupAddDisabledItems" type="submit">Add Disabled Items</button>
            <button class="btn btn-default btn-xs" id="listGroupAddContent" type="submit">Add Custom Content</button>
        </span>
        <button type="button" class="editorButton" data-toggle="modal" data-target="#editorModal">
            <i class="fa fa-edit"></i>
        </button>
        <div class="preview">
            <i class="fa fa-list fa-5x"></i>
            <span>List group</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Amount" v-model="userInputAmount" v-on:keyup="changeAmount">
            </div>
        </div>
        <div class="view">
            <div class="list-group">
                <li class="list-group-item" contenteditable="true">List Group Item</li>
                <li class="list-group-item" contenteditable="true">List Group Item</li>
                <li class="list-group-item" contenteditable="true">List Group Item</li>
            </div>
        </div>
    </div>
</template>

<style>
    .listGroupComponent .preview input{
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
                $(".leftPanel .listGroupComponent .list-group").empty();
                for(var count=0; count<parseInt(this.userInputAmount); count++){
                    $(".leftPanel .listGroupComponent .list-group").append(
                    "<li class='list-group-item' contenteditable='true'>List Group Item</li>");
                }
            }
        }
    }
</script>
