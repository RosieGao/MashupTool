<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    Alert Type <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="successAlert">Success</a></li>
                    <li><a href="#" id="infoAlert">Info</a></li>
                    <li><a href="#" id="warningAlert">Warning</a></li>
                    <li><a href="#" id="dangerAlert">Danger</a></li>
                </ul>
            </div>
            <button class="btn btn-default btn-xs" id="dismissibleAlerts" type="submit">Dismissible Alerts</button>
        </span>
        <div class="preview">
            <i class="fa fa-exclamation-triangle fa-5x"></i>
            <span>Alerts</span>
        </div>
        <div class="view">
            <div class="alert alert-success" role="alert" contenteditable="true"> <strong>This is an alert!</strong> Here is the alert message. Please take a look.</div>
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
