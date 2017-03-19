<template>
    <div class="component progressbarComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="progressbarWithLabel" type="submit">With label</button>
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    Contextual Alternatives <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="successProgressbar">Success</a></li>
                    <li><a href="#" id="infoProgressbar">Info</a></li>
                    <li><a href="#" id="warningProgressbar">Warning</a></li>
                    <li><a href="#" id="dangerProgressbar">Danger</a></li>
                </ul>
            </div>
            <button class="btn btn-default btn-xs" id="stripedProgressbar" type="submit">Striped</button>
            <button class="btn btn-default btn-xs" id="animatedProgressbar" type="submit">Animated</button>
        </span>
        <div class="preview">
            <i class="fa fa-tasks fa-5x"></i>
            <span>Progress Bars</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Percentage" v-model="userInputPercentage" v-on:keyup="changePercentage">
            </div>
        </div>
        <div class="view">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                    <span class="sr-only">60% Complete</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .progressbarComponent .preview input{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
                userInputPercentage: '',
            }
        },
         methods:{
            changePercentage: function(){
                $(".leftPanel .progressbarComponent .view .progress-bar").attr("aria-valuenow", this.userInputPercentage);
                $(".leftPanel .progressbarComponent .view .progress-bar").css("width", this.userInputPercentage + "%");
                $(".leftPanel .progressbarComponent .view span").text(this.userInputPercentage + "% Complete");
            }
        }
    }
</script>
