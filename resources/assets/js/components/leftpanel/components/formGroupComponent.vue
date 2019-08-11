<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="inlineFormGroupButton" type="submit">Inline form group</button>
            <button class="btn btn-default btn-xs" id="focusStateButton" type="submit">Focus state</button>
            <button class="btn btn-default btn-xs" id="formGroupDisabledButton" type="submit">Disabled</button>
        </span>
        <div class="preview">
            <img src="https://yumeng1-vm.ead.ist.ualberta.ca/MashupTool/images/formgroup.png">
            <span>Form Groups</span>
        </div>
        <div class="view">
            <form>
                <div class="form-group" contenteditable="true">
                    <label>Email address</label>
                    <input type="text" class="form-control">
                </div>
            </form>
        </div>
    </div>
</template>

<style>
    .focusedInput {
        border-color: rgba(82,168,236,.8);
        outline: 0;
        outline: thin dotted\9;
        box-shadow: 0 0 8px rgba(82,168,236,.6);
    }
</style>

<script>
    export default{
        data(){
            return{
            }
        },
    }
</script>
