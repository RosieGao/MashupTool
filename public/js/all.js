$(document).ready(function() {
    $(".canvas, .column").sortable({
        connectWith: ".column",
        opacity: 0.5,
        handle: ".dragButton",
    });

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

    $(".selectComponent").draggable({
        stop: function () {
            $(".propertyPanel").empty();
            $(".propertyPanel").load('/propertyPanelInnerHTML.html #selectPropertyPanel');
        }
    });
});

$(document).ready(function() {
    $("#mashupMode").on("click", function(){
        $("body").removeClass("previewLayout").addClass("mashupLayout");
    });
    $("#previewMode").on("click", function(){
        $("body").removeClass("mashupLayout").addClass("previewLayout");
    });
    $("#clear").on("click", function(){
        $(".canvas").empty();
    });

    $(".defaultSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize")
    });
    $(".lgSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize").addClass("lgSize")
    });
    $(".mdSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize").addClass("mdSize")
    });
    $(".smSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize").addClass("smSize")
    });
    $(".xsSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize").addClass("xsSize")
    });

    $(".canvas").on("click", ".removeButton", function(){
        $(this).parent().remove();
    });
});

function toggleAttribute(selector, attr, value){
    if (selector.attr(attr)){
        selector.removeAttr(attr);
    } else{
        selector.attr(attr, value);
    }
}

function imageChange(e){
    if (e.files && e.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(".canvas .imageComponent .view img").attr("src", e.target.result);
        }
        reader.readAsDataURL(e.files[0]);
    }
}

function renderInnerDropdownProperties(uniqueId){
    var node =
        "<div class=\"innerElementProperties\" value=" + uniqueId +">" +
        "<input type='text' class=\"form-control\" placeholder='Amount' id='setDropdownAmounts' style='width:75px;height:23px;display:inline;'>" +
        "<button class=\"btn btn-default btn-xs\" id=\"emptyDropdown\" type=\"submit\">Empty Dropdown</button>" +
        "<button class=\"btn btn-default btn-xs\" id=\"addDropdownHeaders\" type=\"submit\">Add Headers</button>" +
        "<button class=\"btn btn-default btn-xs\" id=\"addDropdownOptions\" type=\"submit\">Add Options</button>" +
        "<button class=\"btn btn-default btn-xs\" id=\"addDropdownDividers\" type=\"submit\">Add Dividers</button>" +
        "</div>";
    return node;
}

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

    $(".canvas").on("click", "#inlineFormGroupButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("form").toggleClass("form-inline");
    });
    $(".canvas").on("click", "#focusStateButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("input").toggleClass("focusedInput");
    });
    $(".canvas").on("click", "#formGroupDisabledButton", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find("input");
        toggleAttribute(selector, "disabled", "disabled");
    });

    $(".canvas").on("click", "#defaultStyleButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warning btn-danger btn-link");
        $(this).closest(".component").find(".view").find("button").addClass("btn-default");
    });

    $(".canvas").on("click", "#primaryStyleButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warning btn-danger btn-link");
        $(this).closest(".component").find(".view").find("button").addClass("btn-primary");
    });

    $(".canvas").on("click", "#successStyleButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warning btn-danger btn-link");
        $(this).closest(".component").find(".view").find("button").addClass("btn-success");
    });

    $(".canvas").on("click", "#infoStyleButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warning btn-danger btn-link");
        $(this).closest(".component").find(".view").find("button").addClass("btn-info");
    });

    $(".canvas").on("click", "#warningStyleButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warning btn-danger btn-link");
        $(this).closest(".component").find(".view").find("button").addClass("btn-warning");
    });

    $(".canvas").on("click", "#dangerStyleButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warning btn-danger btn-link");
        $(this).closest(".component").find(".view").find("button").addClass("btn-danger");
    });

    $(".canvas").on("click", "#linkStyleButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-default btn-primary btn-success btn-info btn-warning btn-danger btn-link");
        $(this).closest(".component").find(".view").find("button").addClass("btn-link");
    });

    $(".canvas").on("click", "#largeSizeButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-lg btn-sm btn-xs");
        $(this).closest(".component").find(".view").find("button").addClass("btn-lg");
    });

    $(".canvas").on("click", "#mediumSizeButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-lg btn-sm btn-xs");
    });

    $(".canvas").on("click", "#smallSizeButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-lg btn-sm btn-xs");
        $(this).closest(".component").find(".view").find("button").addClass("btn-sm");
    });

    $(".canvas").on("click", "#extraSmallSizeButton", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("button").removeClass("btn-lg btn-sm btn-xs");
        $(this).closest(".component").find(".view").find("button").addClass("btn-xs");
    });

    $(".canvas").on("click", "#imageDefaultShape", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("img").removeClass("img-rounded img-circle img-thumbnail");
    });
    $(".canvas").on("click", "#imageRoundedShape", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("img").removeClass("img-rounded img-circle img-thumbnail");
        $(this).closest(".component").find(".view").find("img").toggleClass("img-rounded");
    });
    $(".canvas").on("click", "#imageCircleShape", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("img").removeClass("img-rounded img-circle img-thumbnail");
        $(this).closest(".component").find(".view").find("img").toggleClass("img-circle");
    });
    $(".canvas").on("click", "#imageThumbnailShape", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("img").removeClass("img-rounded img-circle img-thumbnail");
        $(this).closest(".component").find(".view").find("img").toggleClass("img-thumbnail");
    });

    $(".canvas").on("keyup", "#setDropdownAmounts", function(e){
        e.preventDefault();
        var uid = $(this).parent().attr("value");
        $("#"+uid+" .dropdown-menu").empty();
        for(var count=0; count<$(this).val(); count++){
            $("#"+uid+" .dropdown-menu").append(
                "<li><a href='#' contenteditable='true'>Option " + (count+1) +"</a></li>");
        }
    });
    $(".canvas").on("click", "#emptyDropdown", function(e){
        e.preventDefault();
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid+" .dropdown-menu").empty();
        } else{
            $(this).closest(".component").find(".view").find(".dropdown-menu").empty();
        }
    });
    $(".canvas").on("click", "#addDropdownHeaders", function(e){
        e.preventDefault();
        var node = "<li class=\"dropdown-header\" contenteditable=\"true\">Dropdown Header</li>";
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid+" .dropdown-menu").append(node);
        } else{
            $(this).closest(".component").find(".view").find(".dropdown-menu").append(node);
        }
    });
    $(".canvas").on("click", "#addDropdownOptions", function(e){
        e.preventDefault();
        var node = "<li><a href=\"#\" contenteditable=\"true\">Option</a></li>";
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid+" .dropdown-menu").append(node);
        } else{
            $(this).closest(".component").find(".view").find(".dropdown-menu").append(node);
        }
    });
    $(".canvas").on("click", "#addDropdownDividers", function(e){
        e.preventDefault();
        var node = "<li role=\"separator\" class=\"divider\"></li>";
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid+" .dropdown-menu").append(node);
        } else{
            $(this).closest(".component").find(".view").find(".dropdown-menu").append(node);
        }
    });

    $(".canvas").on("click", "#largeButtonGroup", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("#buttonGroup").removeClass("btn-group-lg btn-group-sm btn-group-xs");
        $(this).closest(".component").find(".view").find("#buttonGroup").addClass("btn-group-lg");
    });
    $(".canvas").on("click", "#mediumButtonGroup", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("#buttonGroup").removeClass("btn-group-lg btn-group-sm btn-group-xs");
    });
    $(".canvas").on("click", "#smallButtonGroup", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("#buttonGroup").removeClass("btn-group-lg btn-group-sm btn-group-xs");
        $(this).closest(".component").find(".view").find("#buttonGroup").addClass("btn-group-sm");
    });
    $(".canvas").on("click", "#extraSmallButtonGroup", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("#buttonGroup").removeClass("btn-group-lg btn-group-sm btn-group-xs");
        $(this).closest(".component").find(".view").find("#buttonGroup").addClass("btn-group-xs");
    });
    $(".canvas").on("click", "#verticalButtonGroup", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find("#buttonGroup");
        if (selector.hasClass("btn-group")){
            selector.removeClass("btn-group");
            selector.addClass("btn-group-vertical");
        } else {
            selector.removeClass("btn-group-vertical");
            selector.addClass("btn-group");
        };
    });
    $(".canvas").on("click", "#emptyButtonGroup", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".innerElementProperties").remove();
        $(this).closest(".component").find(".view").find("#buttonGroup").empty();
    });
    $(".canvas").on("click", "#addButtons", function(e){
        e.preventDefault();
        var node = "<button class=\"btn btn-default\" contenteditable=\"true\">Button group</button>";
        $(this).closest(".component").find(".view").find("#buttonGroup").append(node);
    });
    $(".canvas").on("click", "#addDropdowns", function(e){
        e.preventDefault();
        var node =
            "<div class=\"btn-group\">" +
                "<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" contenteditable=\"true\">" +
                    "Dropdown " +
                    "<span class=\"caret\"></span>" +
                "</button>" +
                "<ul class=\"dropdown-menu\">" +
                    "<li><a href=\"#\" contenteditable=\"true\">Option 1</a></li>" +
                    "<li><a href=\"#\" contenteditable=\"true\">Option 2</a></li>" +
                    "<li><a href=\"#\" contenteditable=\"true\">Option 3</a></li>" +
                "</ul>" +
            "</div>";
        $(this).closest(".component").find(".view").find("#buttonGroup").append(node);
        $(this).closest(".component").find(".view").find("#buttonGroup").find(".btn-group:last-child").uniqueId();
        var uniqueId = $(this).closest(".component").find(".view").find("#buttonGroup").find(".btn-group:last-child").attr("id");
        var innerNode = renderInnerDropdownProperties(uniqueId);
        $(this).closest(".component").find(".view").before(innerNode);
    });
});

//# sourceMappingURL=all.js.map
