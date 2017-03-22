<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="https://yumeng1-vm.ead.ist.ualberta.ca/MashupTool/images/choosefiles.png">
            <span>Choose Files</span>
        </div>
        <div class="view">
            <form class="form-inline">
                <div class="form-group">
                    <label contenteditable="true">File Upload</label>
                    <input class="form-control" name='file' type="file">
                    <input class="btn btn-default" type="submit" value="Upload">
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
