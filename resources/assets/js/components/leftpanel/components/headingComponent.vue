<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <button type="button" class="editorButton" data-toggle="modal" data-target="#editorModal">
            <i class="fa fa-edit"></i>
        </button>
        <div class="preview">
            <i class="fa fa-header fa-5x"></i>
            <span>Headings</span>
        </div>
        <div class="view">
            <h3>h3. Bootstrap heading
                <small>Secondary text</small>
            </h3>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data() {
            return {
            };
        }
    }
</script>
