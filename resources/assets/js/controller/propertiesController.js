$(document).ready(function() {
    $(".gridCustomizeInput").on("keyup", function () {
        $(this).closest(".gridSystem").find(".row").empty();
        var inputList = $(this).val().split(" ", 12);
        var outputList = [];
        var total = 0;
        $.each(inputList, function (inputList, item) {
            total += parseInt(item);
        });
        if (total == 12) {
            $.each(inputList, function (inputList, item) {
                outputList.push("<div class=\"column col-xs-" + item + " columndef" + item + "\"></div>");
            });
            $(this).closest(".gridSystem").find(".row").append(outputList.join(""));
        } else{

        }
    });

    $(".canvas").on("click", "#stripedRowsButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("table").toggleClass("table-striped");
    });
    $(".canvas").on("click", "#borderedTablesButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("table").toggleClass("table-bordered");
    });
    $(".canvas").on("click", "#hoverRowsButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("table").toggleClass("table-hover");
    });

    $(".canvas").on("click", "#inlineFormButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("form").toggleClass("form-inline");
    });
    $(".canvas").on("click", "#horizontalFormButton", function(e){
        e.preventDefault();
        if($(this).attr("click-state") == 1) {
            $(this).attr("click-state", 0);
            $(this).closest(".component").find(".view").empty();
            $(this).closest(".component").find(".view").load('/componentInnerHTML.html #defaultFormView');
        } else {
            $(this).attr("click-state", 1);
            $(this).closest(".component").find(".view").empty();
            $(this).closest(".component").find(".view").load('/componentInnerHTML.html #horizontalFormView');
        }
    });
});
