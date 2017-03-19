<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle btn-sm" data-toggle="dropdown" aria-expanded="false">
                    Style <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="defaultStyleButton">Default</a></li>
                    <li><a href="#" id="primaryStyleButton">Primary</a></li>
                    <li><a href="#" id="successStyleButton">Success</a></li>
                    <li><a href="#" id="infoStyleButton">Info</a></li>
                    <li><a href="#" id="warningStyleButton">Warning</a></li>
                    <li><a href="#" id="dangerStyleButton">Danger</a></li>
                    <li><a href="#" id="linkStyleButton">Link</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle btn-sm" data-toggle="dropdown" aria-expanded="false">
                    Size <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="largeSizeButton">Large</a></li>
                    <li><a href="#" id="mediumSizeButton">Medium</a></li>
                    <li><a href="#" id="smallSizeButton">Small</a></li>
                    <li><a href="#" id="extraSmallSizeButton">Extra small</a></li>
                </ul>
            </div>
        </span>
        <div class="preview">
            <img src="/images/button.png">
            <span>Buttons</span>
        </div>
        <div class="view">
            <button type="button" class="btn btn-default" contenteditable="true">Button</button>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return{
            }
        },
    }
</script>
