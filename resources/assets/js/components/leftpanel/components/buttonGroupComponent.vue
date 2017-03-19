<template>
    <div class="component buttonGroupComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    Size <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="largeButtonGroup">Large</a></li>
                    <li><a href="#" id="mediumButtonGroup">Medium</a></li>
                    <li><a href="#" id="smallButtonGroup">Small</a></li>
                    <li><a href="#" id="extraSmallButtonGroup">Extra small</a></li>
                </ul>
            </div>
            <button class="btn btn-default btn-xs" id="verticalButtonGroup" type="submit">Vertical</button>
            <button class="btn btn-default btn-xs" id="emptyButtonGroup" type="submit">Empty</button>
            <button class="btn btn-default btn-xs" id="buttonGroupAddButtons" type="submit">Add Buttons</button>
            <button class="btn btn-default btn-xs" id="buttonGroupAddDropdowns" type="submit">Add Dropdowns</button>
        </span>
        <div class="preview">
            <img src="/images/wait.png">
            <span>Button Groups</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="# of options" v-model="userInputNumberOfButtons" v-on:keyup="changeNumberOfButtons">
            </div>
        </div>
        <div class="view">
            <div id="buttonGroup" class="btn-group">
                <button class="btn btn-default" contenteditable="true">Button 1</button>
                <button class="btn btn-default" contenteditable="true">Button 2</button>
                <button class="btn btn-default" contenteditable="true">Button 3</button>
            </div>
        </div>
    </div>
</template>

<style>
    .buttonGroupComponent .preview input{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
                userInputNumberOfButtons: '',
            }
        },
         methods:{
            changeNumberOfButtons: function(){
                $(".leftPanel .buttonGroupComponent .view .btn-group").empty();
                for(var count=0; count<parseInt(this.userInputNumberOfButtons); count++){
                    $(".leftPanel .buttonGroupComponent .view .btn-group").append(
                    "<button class='btn btn-default' contenteditable='true'>Button " + (count+1) + "</button>");
                }
            }
        }
    }
</script>
