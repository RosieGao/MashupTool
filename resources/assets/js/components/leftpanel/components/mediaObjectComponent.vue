<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="leftMediaObject" type="submit">Left</button>
            <button class="btn btn-default btn-xs" id="rightMediaObject" type="submit">Right</button>
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    Alignment<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="topMediaObject">Top</a></li>
                    <li><a href="#" id="middleMediaObject">Middle</a></li>
                    <li><a href="#" id="bottomMediaObject">Bottom</a></li>
                </ul>
            </div>
        </span>
        <div class="preview">
            <img src="/images/mediaobject.png">
            <span>Media object</span>
        </div>
        <div class="view">
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <input type="file" onchange="mediaObjectUpload(this)" style="display:none"/>
                        <img class="media-object" src="/images/mediaobject.png" alt="Media object" style="width: 64px; height: 64px">
                    </a>
                </div>
                <div class="media-body" contenteditable="true">
                    <h4 class="media-heading" contenteditable="true">Media heading</h4>
                    Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left- or right-aligned image alongside textual content. The default media displays a media object (images, video, audio) to the left or right of a content block. Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left- or right-aligned image alongside textual content. The default media displays a media object (images, video, audio) to the left or right of a content block. Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left- or right-aligned image alongside textual content. The default media displays a media object (images, video, audio) to the left or right of a content block.
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
