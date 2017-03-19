<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="panelEmpty" type="submit">Empty</button>
            <button class="btn btn-default btn-xs" id="panelAddHeading" type="submit">Add a Heading</button>
            <button class="btn btn-default btn-xs" id="panelAddFooter" type="submit">Add a Footer</button>
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    Contextual alternatives <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="defaultPanel">Default</a></li>
                    <li><a href="#" id="primaryPanel">Primary</a></li>
                    <li><a href="#" id="successPanel">Success</a></li>
                    <li><a href="#" id="infoPanel">Info</a></li>
                    <li><a href="#" id="warningPanel">Warning</a></li>
                    <li><a href="#" id="dangerPanel">Danger</a></li>
                </ul>
            </div>
            <button class="btn btn-default btn-xs" id="panelAddTables" type="submit">Add Tables</button>
            <button class="btn btn-default btn-xs" id="panelAddListGroups" type="submit">Add List Groups</button>
        </span>
        <div class="preview">
            <img src="/images/panel.png">
            <span>Panels</span>
        </div>
        <div class="view">
            <div class="panel panel-default">
                <div class="panel-body" contenteditable="true">
                    Panel content
                </div>
            </div>
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
