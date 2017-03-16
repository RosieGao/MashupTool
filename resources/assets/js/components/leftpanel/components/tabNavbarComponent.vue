<template>
    <div class="component tabNavbarComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="emptyTabNavbar" type="submit">Empty</button>
            <button class="btn btn-default btn-xs" id="tabNavbarAddTabs" type="submit">Add Tabs</button>
            <button class="btn btn-default btn-xs" id="tabNavbarAddDropdowns" type="submit">Add Dropdowns</button>
            <button class="btn btn-default btn-xs" id="justifiedTabNavbar" type="submit">Justified</button>
        </span>
        <div class="preview">
            <img src="/images/nav.png">
            <span>Tab Navbars</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="# of options" v-model="userInputNumberOfTabs" v-on:keyup="changeNumberOfTabs">
            </div>
        </div>
        <div class="view">
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#" contenteditable="true">Tab 1</a></li>
                <li role="presentation"><a href="#" contenteditable="true">Tab 2</a></li>
                <li role="presentation"><a href="#" contenteditable="true">Tab 3</a></li>
            </ul>
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
                userInputNumberOfTabs: '',
            }
        },
         methods:{
            changeNumberOfTabs: function(){
                $(".leftPanel .tabNavbarComponent .view .nav-tabs").empty();
                for(var count=0; count<parseInt(this.userInputNumberOfTabs); count++){
                    $(".leftPanel .tabNavbarComponent .view .nav-tabs").append(
                    "<li role='presentation'><a href='#' contenteditable='true'>Tab " + (count+1) + "</a></li>");
                }
            }
        }
    }
</script>
