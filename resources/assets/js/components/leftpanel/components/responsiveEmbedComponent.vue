<template>
    <div class="component responsiveEmbedComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="16by9ResponsiveEmbed" type="submit">16:9</button>
            <button class="btn btn-default btn-xs" id="4by3ResponsiveEmbed" type="submit">4:3</button>
        </span>
        <div class="preview">
            <i class="fa fa-youtube-play fa-5x"></i>
            <span>Responsive Embed</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Url" v-model="userInputUrl" v-on:keyup="changeUrl">
            </div>
        </div>
        <div class="view">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen=""></iframe>
            </div>
        </div>
    </div>
</template>

<style>
    .responsiveEmbedComponent .preview input{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
                userInputUrl: '',
            }
        },
         methods:{
            changeUrl: function(){
                $(".leftPanel .responsiveEmbedComponent .embed-responsive-item").attr("src", this.userInputUrl);
            }
        }
    }
</script>
