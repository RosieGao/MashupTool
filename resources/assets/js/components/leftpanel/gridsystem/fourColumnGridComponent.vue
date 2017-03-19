<template>
    <div class="gridSystem">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/fourcolumns.png">
            <span>Four Columns</span>
            <input type="text" class="form-control" placeholder="3 3 3 3" v-model="userInput">
        </div>
        <div class="view">
            <div class="row">
                <div class="column" v-bind:class="column1">
                </div>
                <div class="column" v-bind:class="column2">
                </div>
                <div class="column" v-bind:class="column3">
                </div>
                <div class="column" v-bind:class="column4">
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
                userInput: '',
                isCorrect: false,
            }
        },

        computed:{
            column1: function () {
                this.getColumnList();
                if (this.isCorrect){
                    return "col-xs-" + this.getColumnList()[0] + " columndef" + this.getColumnList()[0]
                }
                return "col-xs-3 columndef3"
            },
            column2: function () {
                this.getColumnList();
                if (this.isCorrect){
                    return "col-xs-" + this.getColumnList()[1] + " columndef" + this.getColumnList()[1]
                }
                return "col-xs-3 columndef3"
            },
            column3: function () {
                this.getColumnList();
                if (this.isCorrect){
                    return "col-xs-" + this.getColumnList()[2] + " columndef" + this.getColumnList()[2]
                }
                return "col-xs-3 columndef3"
            },
            column4: function () {
                this.getColumnList();
                if (this.isCorrect){
                    return "col-xs-" + this.getColumnList()[3] + " columndef" + this.getColumnList()[3]
                }
                return "col-xs-3 columndef3"
            }
        },

        methods:{
            getColumnList: function(){
                this.isCorrect = false;
                var total = 0;
                var inputList = this.userInput.split(" ", 4);
                var outputList = [];
                $.each(inputList, function(inputList, item){
                    total += parseInt(item);
                });
                if (total == 12){
                    this.isCorrect = true;
                    $.each(inputList, function(inputList, item){
                        outputList.push(item)
                    });
                }
                return outputList
            }
        }
    }
</script>
