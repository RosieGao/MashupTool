<template>
    <div class="gridSystem">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/fourcolumns.png">
            <span>Four Columns</span>
            <input type="text" class="form-control property" placeholder="3 3 3 3">
        </div>
        <div class="view">
            <div class="row">
                <div class="column col-xs-3 columndef3">
                </div>
                <div class="column col-xs-3 columndef3">
                </div>
                <div class="column col-xs-3 columndef3">
                </div>
                <div class="column col-xs-3 columndef3">
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
