<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/formgroup.png">
            <span>Form Groups</span>
        </div>
        <div class="view">
            <form>
                <div class="form-group">
                    <label contenteditable="true">Email address</label>
                    <input type="text" class="form-control">
                </div>
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
