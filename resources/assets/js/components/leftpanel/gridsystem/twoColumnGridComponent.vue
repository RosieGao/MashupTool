<template>
    <div class="gridSystem">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/twocolumns.png">
            <span>Two Columns</span>
            <input type="text" class="form-control property" placeholder="6 6">
        </div>
        <div class="view">
            <div class="row">
                <div class="column col-xs-6 columndef6">
                </div>
                <div class="column col-xs-6 columndef6">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .property{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
            }
        },
        computed:{

        }
    }
</script>
