<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <i class="fa fa-youtube-play fa-5x"></i>
            <span>Responsive Embed</span>
        </div>
        <div class="view">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen=""></iframe>
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
