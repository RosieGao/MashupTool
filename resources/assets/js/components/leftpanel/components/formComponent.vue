<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="inlineFormButton" type="submit">Inline form</button>
            <button class="btn btn-default btn-xs" id="horizontalFormButton" type="submit">Horizontal form</button>
        </span>
        <div class="preview">
            <img src="https://yumeng1-vm.ead.ist.ualberta.ca/MashupTool/images/form.png">
            <span>Forms</span>
        </div>
        <div class="view">
            <form contenteditable="true">
                <div class="form-group">
                    <label>Email address</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control">
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-default">Sign in</button>
            </form>
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
