<template>
    <div class="component dropdownComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="emptyDropdown" type="submit">Empty Dropdown</button>
            <button class="btn btn-default btn-xs" id="addDropdownHeaders" type="submit">Add Headers</button>
            <button class="btn btn-default btn-xs" id="addDropdownOptions" type="submit">Add Options</button>
            <button class="btn btn-default btn-xs" id="addDropdownDividers" type="submit">Add Dividers</button>
        </span>
        <div class="preview">
            <img src="/images/buttondropdowns.png">
            <span>Dropdowns</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="# of options" v-model="userInputNumberOfOptions" v-on:keyup="changeNumberOfOptions">
            </div>
        </div>
        <div class="view">
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true" contenteditable="true">
                    Dropdown
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" contenteditable="true">Option 1</a></li>
                    <li><a href="#" contenteditable="true">Option 2</a></li>
                    <li><a href="#" contenteditable="true">Option 3</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    .dropdownComponent .preview input{
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
                $(".leftPanel .dropdownComponent .dropdown-menu").empty();
                for(var count=0; count<parseInt(this.userInputNumberOfOptions); count++){
                    $(".leftPanel .dropdownComponent .dropdown-menu").append(
                    "<li><a href='#' contenteditable='true'>Option " + (count+1) +"</a></li>");
                }
            }
        }
    }
</script>
