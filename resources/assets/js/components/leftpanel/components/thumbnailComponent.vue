<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    Amount <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="oneThumbnail">1</a></li>
                    <li><a href="#" id="twoThumbnails">2</a></li>
                    <li><a href="#" id="threeThumbnails">3</a></li>
                    <li><a href="#" id="fourThumbnails">4</a></li>
                    <li><a href="#" id="sixThumbnails">6</a></li>
                </ul>
            </div>
        </span>
        <div class="preview">
            <img src="/images/thumbnails.png">
            <span>Thumbnails</span>
        </div>
        <div class="view">
            <div id="threeThumbnailsView">
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail onehaha">
                        <input type="file" onchange="thumbnailImageUpload(this)" style="display:none"/>
                        <img class="thumbnailImage" src="/images/responsiveimage1.png" alt="Thumbnail">
                        <div class="caption">
                            <h3 contenteditable="true">Thumbnail label</h3>
                            <p contenteditable="true">Extend Bootstrap's grid system with the thumbnail component to easily display grids of images, videos, text, and more.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <input type="file" onchange="thumbnailImageUpload(this)" style="display:none"/>
                        <img class="thumbnailImage" src="/images/responsiveimage1.png" alt="Thumbnail">
                        <div class="caption">
                            <h3 contenteditable="true">Thumbnail label</h3>
                            <p contenteditable="true">Extend Bootstrap's grid system with the thumbnail component to easily display grids of images, videos, text, and more.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <input type="file" onchange="thumbnailImageUpload(this)" style="display:none"/>
                        <img class="thumbnailImage" src="/images/responsiveimage1.png" alt="Thumbnail">
                        <div class="caption">
                            <h3 contenteditable="true">Thumbnail label</h3>
                            <p contenteditable="true">Extend Bootstrap's grid system with the thumbnail component to easily display grids of images, videos, text, and more.</p>
                        </div>
                    </div>
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
