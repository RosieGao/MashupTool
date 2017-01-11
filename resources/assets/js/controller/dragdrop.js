function initialContainer(){
    $(".canvas, .column").sortable({
        connectWith: ".column",
        opacity: 0.5,
        handle: ".dragButton",
    });
}

$(document).ready(function() {
    initialContainer();

    $(".gridSystem").draggable({
        connectToSortable: ".canvas",
        helper: "clone",
        scroll: false,
        handle: ".preview",
        drag: function (event, ui) {
            ui.helper.width("100%")
        },
        stop: function (event, ui) {
            ui.helper.removeAttr("style");
            $(".canvas .column").sortable({
                connectWith: ".column",
                opacity: 0.5,
                handle: ".dragButton",
            });
        }
    });

    $(".component").draggable({
        connectToSortable: ".column",
        helper: "clone",
        scroll: false,
        handle: ".preview",
        drag: function (event, ui) {
            ui.helper.width("100%");
        },
        stop: function (event, ui) {
            ui.helper.removeAttr("style");
        }
    });

    $(".gridCustomizeInput").on("keyup", function(){
        $(this).closest(".gridSystem").find(".row").empty();
        var inputList = $(this).val().split(" ", 12);
        var outputList = [];
        var total = 0;
        $.each(inputList, function(inputList, item){
            total += parseInt(item);
        });
        if (total == 12){
            $.each(inputList, function(inputList, item){
                outputList.push("<div class=\"column col-xs-" + item + " columndef" + item +"\"></div>");
            });
            $(this).closest(".gridSystem").find(".row").append(outputList.join(""));
        }
    });
});
