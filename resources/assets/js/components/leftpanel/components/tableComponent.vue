<template>
    <div class="component tableComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="stripedRowsButton" type="submit">Striped rows</button>
            <button class="btn btn-default btn-xs" id="borderedTablesButton" type="submit">Bordered tables</button>
            <button class="btn btn-default btn-xs" id="hoverRowsButton" type="submit">Hover rows</button>
        </span>
        <div class="preview">
            <i class="fa fa-table fa-5x"></i>
            <span>Tables</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="row" v-model="userInputRow" v-on:keyup="customizeTable">
                <input type="text" class="form-control" placeholder="col" v-model="userInputColumn" v-on:keyup="customizeTable">
            </div>
        </div>
        <div class="view">
            <table id="customizedTable" class="table" contenteditable="true">
            </table>
        </div>
    </div>
</template>

<style>
    .tableComponent .preview input{
        margin-top: 5px;
        height: 20px;
        width: 45%;
        display: inline-block;
        padding: 0px 5px;
    }
</style>

<script>
    export default{
        data(){
            return{
                userInputRow: '',
                userInputColumn: '',
            }
        },
         methods:{
            customizeTable: function(){
                for(var rowIndex=0; rowIndex<parseInt(this.userInputRow,10); rowIndex++){
                    var row = document.getElementById('customizedTable').insertRow(rowIndex);
                    for(var columnIndex=0; columnIndex<parseInt(this.userInputColumn,10); columnIndex++){
                        var column = row.insertCell(columnIndex);
                        column.innerHTML="Row-" + rowIndex + " Column-" + columnIndex;
                    }
                }
            }
        }
    }
</script>
