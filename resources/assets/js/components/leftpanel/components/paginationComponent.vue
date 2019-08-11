<template>
    <div class="component paginationComponent">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    Size <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" id="largePagination">Large</a></li>
                    <li><a href="#" id="mediumPagination">Medium</a></li>
                    <li><a href="#" id="smallPagination">Small</a></li>
                </ul>
            </div>
        </span>
        <div class="preview">
            <img src="https://yumeng1-vm.ead.ist.ualberta.ca/MashupTool/images/wait.png">
            <span>Pagination</span>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Amount" v-model="userInputAmount" v-on:keyup="changeAmount">
            </div>
        </div>
        <div class="view">
            <nav>
                <ul class="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style>
    .paginationComponent .preview input{
        margin-top: 5px;
        height: 20px;
    }
</style>

<script>
    export default{
        data(){
            return{
                userInputAmount: '',
            }
        },
        methods:{
            changeAmount: function(){
                $(".leftPanel .paginationComponent .pagination").empty();
		        var node = [];
		        node.push("<li><a href='#' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>");
		        for(var count=0; count<parseInt(this.userInputAmount); count++){
			        node.push("<li><a href='#'>" + (count+1) + "</a></li>");
		        }
		        node.push("<li><a href='#' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>");
		        $(".leftPanel .paginationComponent .pagination").append(node.join(""));
            }
        }
    }
</script>
