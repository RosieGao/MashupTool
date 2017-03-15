<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <form style="display: inline-block">
                <input type="file" @change="imageChange"/>
            </form>
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    Shape <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="imageDefaultShape">Default</a></li>
                    <li><a href="#" id="imageRoundedShape">Rounded</a></li>
                    <li><a href="#" id="imageCircleShape">Circle</a></li>
                    <li><a href="#" id="imageThumbnailShape">Thumbnail</a></li>
                </ul>
            </div>
        </span>
        <div class="preview">
            <i class="fa fa-picture-o fa-5x"></i>
            <span>Images</span>
        </div>
        <div class="view">
            <img :src="imageSrc" class="img-responsive" alt="Responsive Image">
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return{
                imageSrc: '',
            }
        },
        methods:{
            imageChange: function(e){
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        this.imageSrc = e.target.result;
                    }
                    reader.readAsDataURL(files[0]);
                }
            }
        }
    }
</script>
