<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/mediaobject.png">
            <span>Media object</span>
        </div>
        <div class="view">
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="/images/mediaobject.png" alt="Media object" style="width: 64px; height: 64px">
                    </a>
                </div>
                <div class="media-body" contenteditable="true">
                    <h4 class="media-heading" contenteditable="true">Media heading</h4> Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left- or right-aligned image alongside textual content. The default media displays a media object (images, video, audio) to the left or right of a content block.
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
