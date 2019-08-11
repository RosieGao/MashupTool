<template>
    <div class="component pillNavbarComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="emptyPillNavbar" type="submit">Empty</button>
            <button class="btn btn-default btn-xs" id="pillNavbarAddTabs" type="submit">Add Tabs</button>
            <button class="btn btn-default btn-xs" id="pillNavbarAddDropdowns" type="submit">Add Dropdowns</button>
            <button class="btn btn-default btn-xs" id="justifiedPillNavbar" type="submit">Justified</button>
            <button class="btn btn-default btn-xs" id="stackablePillNavbar" type="submit">Stackable</button>
        </span>
        <div class="preview">
            <img src="https://yumeng1-vm.ead.ist.ualberta.ca/MashupTool/images/wait.png">
            <span>Pill Navbars</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="# of options" v-model="userInputNumberOfTabs" v-on:keyup="changeNumberOfTabs">
            </div>
        </div>
        <div class="view">
            <ul class="nav nav-pills">
                <li role="presentation" class="active"><a href="#" contenteditable="true">Tab 1</a></li>
                <li role="presentation"><a href="#" contenteditable="true">Tab 2</a></li>
                <li role="presentation"><a href="#" contenteditable="true">Tab 3</a></li>
            </ul>
        </div>
    </div>
</template>

<style>
    .pillNavbarComponent .preview input{
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
                $(".leftPanel .pillNavbarComponent .view .nav-pills").empty();
                for(var count=0; count<parseInt(this.userInputNumberOfTabs); count++){
                    if (count==0){
                        $(".leftPanel .pillNavbarComponent .view .nav-pills").append(
                        "<li role='presentation' class='active'><a href='#' contenteditable='true'>Tab 1</a></li>");
                        continue;
                    }
                    $(".leftPanel .pillNavbarComponent .view .nav-pills").append(
                    "<li role='presentation'><a href='#' contenteditable='true'>Tab " + (count+1) + "</a></li>");
                }
            }
        }
    }
</script>
