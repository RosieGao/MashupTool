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

function download(page_name){
    $("#savedMashupHtml").html($(".canvas").html());
    $("#savedMashupHtml").find(".removeButton, .dragButton, .properties, .innerElementProperties, .preview").remove();
    $("#saveSuccessMsg").show().delay(3000).fadeOut();
    var str = $("#savedMashupHtml").html();
    var blob = new Blob([
        "<html>" +
        "<head>" +
        "<body>" +
        str +
        "</body>" +
        "</head>" +
        "</html>"], {type:"text/plain;charset=utf-8"});
    saveAs(blob, page_name+".html");
}

function saveHtml(){
    $("#savedMashupHtml").html($(".canvas").html());
    $("#savedMashupHtml").find(".removeButton, .dragButton, .properties, .innerElementProperties, .preview").remove();
    $("#saveSuccessMsg").show().delay(3000).fadeOut();
    return $("#savedMashupHtml").html();
}

function toggleAttribute(selector, attr, value){
    if (selector.attr(attr)){
        selector.removeAttr(attr);
    } else{
        selector.attr(attr, value);
    }
}

function imageChange(obj){
    if (obj.files && obj.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(obj).closest(".imageComponent").find("img").attr("src", e.target.result);
        };
        reader.readAsDataURL(obj.files[0]);
    }
}

function thumbnailImageUpload(obj){
    if (obj.files && obj.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(obj).closest(".thumbnail").find("img").attr("src", e.target.result);
        };
        reader.readAsDataURL(obj.files[0]);
    }
}

function mediaObjectUpload(obj){
    if (obj.files && obj.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e){
            $(obj).closest(".media").find("img").attr("src", e.target.result);
        };
        reader.readAsDataURL(obj.files[0]);
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

function renderInnerListGroupProperties(uniqueId){
    var node =
        "<div class=\"innerElementProperties\" value=" + uniqueId +">" +
            "<input type='text' class=\"form-control\" placeholder='Amount' id='setListGroupAmounts' style='width:75px;height:23px;display:inline;'>" +
            "<button class='btn btn-default btn-xs' id='listGroupEmpty' type='submit'>Empty</button>" +
            "<button class='btn btn-default btn-xs' id='listGroupAddItems' type='submit'>Add Items</button>" +
            "<button class='btn btn-default btn-xs' id='listGroupAddLinkItems' type='submit'>Add Link Items</button>" +
            "<button class='btn btn-default btn-xs' id='listGroupAddButtonItems' type='submit'>Add Button Items</button>" +
            "<button class='btn btn-default btn-xs' id='listGroupAddDisabledItems' type='submit'>Add Disabled Items</button>" +
            "<button class='btn btn-default btn-xs' id='listGroupAddContent' type='submit'>Add Custom Content</button>" +
        "</div>";
    return node;
}

function renderInnerTableProperties(uniqueId){
    var node =
        "<div class=\"innerElementProperties\" value=" + uniqueId +">" +
            "<input type='text' class=\"form-control\" placeholder='Row' id='setTableRow' style='width:75px;height:23px;display:inline;'>" +
            "<input type='text' class=\"form-control\" placeholder='column' id='setTableColumn' style='width:75px;height:23px;display:inline;'>" +
            "<button class='btn btn-default btn-xs' id='stripedRowsButton' type='submit'>Striped rows</button>" +
            "<button class='btn btn-default btn-xs' id='borderedTablesButton' type='submit'>Bordered tables</button>" +
            "<button class='btn btn-default btn-xs' id='hoverRowsButton' type='submit'>Hover rows</button>"
        "</div>";
    return node;
}

$(document).ready(function() {
    /**
     *
     */
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

    /**
     *
     */
    $(".canvas").on("keyup", "#setTableRow, #setTableColumn", function(e){
        e.preventDefault();
        var userInputRow = $(this).closest(".innerElementProperties").find("#setTableRow").val();
        var userInputColumn = $(this).closest(".innerElementProperties").find("#setTableColumn").val();
        var uid = $(this).parent().attr("value");
        $("#"+uid).empty();
        for(var rowIndex=0; rowIndex<userInputRow; rowIndex++){
            var row = document.querySelector("#"+uid).insertRow(rowIndex);
            for(var columnIndex=0; columnIndex<userInputColumn; columnIndex++){
                var column = row.insertCell(columnIndex);
                column.innerHTML="Row-" + rowIndex + " Column-" + columnIndex;
            }
        }
    });
    $(".canvas").on("click", "#stripedRowsButton", function(e){
        e.preventDefault();
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).toggleClass("table-striped");
        } else{
            $(this).closest(".component").find(".view").find("table").toggleClass("table-striped");
        }
    });
    $(".canvas").on("click", "#borderedTablesButton", function(e){
        e.preventDefault();
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).toggleClass("table-bordered");
        } else{
            $(this).closest(".component").find(".view").find("table").toggleClass("table-bordered");
        }
    });
    $(".canvas").on("click", "#hoverRowsButton", function(e){
        e.preventDefault();
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).toggleClass("table-hover");
        } else{
            $(this).closest(".component").find(".view").find("table").toggleClass("table-hover");
        }
    });

    /**
     *
     */
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

    /**
     *
     */
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

    /**
     *
     */
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

    /**
     *
     */
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

    /**
     *
     */
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

    /**
     *
     */
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
    $(".canvas").on("click", "#buttonGroupAddButtons", function(e){
        e.preventDefault();
        var node = "<button class=\"btn btn-default\" contenteditable=\"true\">Button group</button>";
        $(this).closest(".component").find(".view").find("#buttonGroup").append(node);
    });
    $(".canvas").on("click", "#buttonGroupAddDropdowns", function(e){
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

    /**
     *
     */
    $(".canvas").on("click", "#emptyTabNavbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".innerElementProperties").remove();
        $(this).closest(".component").find(".view").find(".nav-tabs").empty();
    });
    $(".canvas").on("click", "#tabNavbarAddTabs", function(e){
        e.preventDefault();
        var node = "<li role=\"presentation\"><a href=\"#\" contenteditable=\"true\">Tab</a></li>";
        $(this).closest(".component").find(".view").find(".nav-tabs").append(node);
    });
    $(".canvas").on("click", "#tabNavbarAddDropdowns", function(e){
        e.preventDefault();
        var node =
            "<li role=\"presentation\" class=\"dropdown\">" +
            "<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\" contenteditable=\"true\">" +
            "Dropdown " +
            "<span class=\"caret\"></span>" +
            "</a>" +
            "<ul class=\"dropdown-menu\">" +
            "<li><a href=\"#\" contenteditable=\"true\">Option 1</a></li>" +
            "<li><a href=\"#\" contenteditable=\"true\">Option 2</a></li>" +
            "<li><a href=\"#\" contenteditable=\"true\">Option 3</a></li>" +
            "</ul>" +
            "</li>";
        $(this).closest(".component").find(".view").find(".nav-tabs").append(node);
        $(this).closest(".component").find(".view").find(".nav-tabs").find(".dropdown:last-child").uniqueId();
        var uniqueId = $(this).closest(".component").find(".view").find(".nav-tabs").find(".dropdown:last-child").attr("id");
        var innerNode = renderInnerDropdownProperties(uniqueId);
        $(this).closest(".component").find(".view").before(innerNode);
    });
    $(".canvas").on("click", "#justifiedTabNavbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".nav-tabs").toggleClass("nav-justified");
    });

    /**
     *
     */
    $(".canvas").on("click", "#emptyPillNavbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".innerElementProperties").remove();
        $(this).closest(".component").find(".view").find(".nav-pills").empty();
    });
    $(".canvas").on("click", "#pillNavbarAddTabs", function(e){
        e.preventDefault();
        var node = "<li role=\"presentation\"><a href=\"#\" contenteditable=\"true\">Tab</a></li>";
        $(this).closest(".component").find(".view").find(".nav-pills").append(node);
    });
    $(".canvas").on("click", "#pillNavbarAddDropdowns", function(e){
        e.preventDefault();
        var node =
            "<li role=\"presentation\" class=\"dropdown\">" +
            "<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\" contenteditable=\"true\">" +
            "Dropdown " +
            "<span class=\"caret\"></span>" +
            "</a>" +
            "<ul class=\"dropdown-menu\">" +
            "<li><a href=\"#\" contenteditable=\"true\">Option 1</a></li>" +
            "<li><a href=\"#\" contenteditable=\"true\">Option 2</a></li>" +
            "<li><a href=\"#\" contenteditable=\"true\">Option 3</a></li>" +
            "</ul>" +
            "</li>";
        $(this).closest(".component").find(".view").find(".nav-pills").append(node);
        $(this).closest(".component").find(".view").find(".nav-pills").find(".dropdown:last-child").uniqueId();
        var uniqueId = $(this).closest(".component").find(".view").find(".nav-pills").find(".dropdown:last-child").attr("id");
        var innerNode = renderInnerDropdownProperties(uniqueId);
        $(this).closest(".component").find(".view").before(innerNode);
    });
    $(".canvas").on("click", "#justifiedPillNavbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".nav-pills").toggleClass("nav-justified");
    });
    $(".canvas").on("click", "#stackablePillNavbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".nav-pills").toggleClass("nav-stacked");
    });

    /**
     *
     */
    $(".canvas").on("click", "#navbarFixedToTp", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".navbar").toggleClass("navbar-fixed-top");
    });
    $(".canvas").on("click", "#navbarFixedToBottom", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".navbar").toggleClass("navbar-fixed-bottom");
    });
    $(".canvas").on("click", "#navbarStaticTop", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".navbar").toggleClass("navbar-static-top");
    });
    $(".canvas").on("click", "#navbarInverted", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".navbar");
        if (selector.hasClass("navbar-default")){
            selector.removeClass("navbar-default");
            selector.addClass("navbar-inverse");
        } else {
            selector.removeClass("navbar-inverse");
            selector.addClass("navbar-default");
        };
    });

    /**
     *
     */
    $(".canvas").on("click", "#breadcrumbEmpty", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".breadcrumb").empty();
    });
    $(".canvas").on("click", "#breadcrumbAddChild", function(e){
        e.preventDefault();
        var breadcrumb = $(this).closest(".component").find(".view").find(".breadcrumb");
        var amount = breadcrumb.children().length;
        if (amount > 0) {
            breadcrumb.find("li:last-child").remove();
            breadcrumb.append("<li><a href='#' contenteditable='true'>Breadcrumb " + (amount) + "</a></li>");
        }
        breadcrumb.append("<li class='active' contenteditable='true'>Breadcrumb " + (amount+1) + "</li>");
    });

    /**
     *
     */
    $(".canvas").on("click", "#largePagination", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".pagination").removeClass("pagination-lg pagination-sm");
        $(this).closest(".component").find(".view").find(".pagination").addClass("pagination-lg");
    });
    $(".canvas").on("click", "#mediumPagination", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".pagination").removeClass("pagination-lg pagination-sm");
    });
    $(".canvas").on("click", "#smallPagination", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".pagination").removeClass("pagination-lg pagination-sm");
        $(this).closest(".component").find(".view").find(".pagination").addClass("pagination-sm");
    });

    /**
     *
     */
    $(".canvas").on("click", "#oneThumbnail", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").empty();
        $(this).closest(".component").find(".view").load('/componentInnerHTML.html #oneThumbnailView');
    });
    $(".canvas").on("click", "#twoThumbnails", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").empty();
        $(this).closest(".component").find(".view").load('/componentInnerHTML.html #twoThumbnailsView');
    });
    $(".canvas").on("click", "#threeThumbnails", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").empty();
        $(this).closest(".component").find(".view").load('/componentInnerHTML.html #threeThumbnailsView');
    });
    $(".canvas").on("click", "#fourThumbnails", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").empty();
        $(this).closest(".component").find(".view").load('/componentInnerHTML.html #fourThumbnailsView');
    });
    $(".canvas").on("click", "#sixThumbnails", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").empty();
        $(this).closest(".component").find(".view").load('/componentInnerHTML.html #sixThumbnailsView');
    });
    $(".canvas").on("click", "#sixThumbnails", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").empty();
        $(this).closest(".component").find(".view").load('/componentInnerHTML.html #sixThumbnailsView');
    });
    $(".canvas").on("click", ".thumbnailImage", function(e){
        e.preventDefault();
        $(this).closest(".thumbnail").find("input").trigger('click');
    });

    /**
     *
     */
    $(".canvas").on("click", "#successAlert", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".alert").removeClass("alert-success alert-info alert-warning alert-danger");
        $(this).closest(".component").find(".view").find(".alert").addClass("alert-success")
    });
    $(".canvas").on("click", "#infoAlert", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".alert").removeClass("alert-success alert-info alert-warning alert-danger");
        $(this).closest(".component").find(".view").find(".alert").addClass("alert-info")
    });
    $(".canvas").on("click", "#warningAlert", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".alert").removeClass("alert-success alert-info alert-warning alert-danger");
        $(this).closest(".component").find(".view").find(".alert").addClass("alert-warning")
    });
    $(".canvas").on("click", "#dangerAlert", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".alert").removeClass("alert-success alert-info alert-warning alert-danger");
        $(this).closest(".component").find(".view").find(".alert").addClass("alert-danger")
    });
    $(".canvas").on("click", "#dismissibleAlerts", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".alert");
        selector.toggleClass("alert-dismissible");
        if (selector.hasClass("alert-dismissible")){
            selector.prepend("<button class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>")
        } else {
            selector.find("button").remove();
        }
    });

    /**
     *
     */
    $(".canvas").on("click", "#progressbarWithLabel", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find("span").toggleClass("sr-only");
    });
    $(".canvas").on("click", "#successProgressbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".progress-bar").removeClass("progress-bar-success progress-bar-info progress-bar-warning progress-bar-danger");
        $(this).closest(".component").find(".view").find(".progress-bar").addClass("progress-bar-success");
    });
    $(".canvas").on("click", "#infoProgressbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".progress-bar").removeClass("progress-bar-success progress-bar-info progress-bar-warning progress-bar-danger");
        $(this).closest(".component").find(".view").find(".progress-bar").addClass("progress-bar-info");
    });
    $(".canvas").on("click", "#warningProgressbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".progress-bar").removeClass("progress-bar-success progress-bar-info progress-bar-warning progress-bar-danger");
        $(this).closest(".component").find(".view").find(".progress-bar").addClass("progress-bar-warning");
    });
    $(".canvas").on("click", "#dangerProgressbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".progress-bar").removeClass("progress-bar-success progress-bar-info progress-bar-warning progress-bar-danger");
        $(this).closest(".component").find(".view").find(".progress-bar").addClass("progress-bar-danger");
    });
    $(".canvas").on("click", "#stripedProgressbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".progress-bar").toggleClass("progress-bar-striped");
    });
    $(".canvas").on("click", "#animatedProgressbar", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".progress-bar").toggleClass("active");
    });

    /**
     *
     */
    $(".canvas").on("click", "#leftMediaObject", function(e){
        e.preventDefault();
        var media = $(this).closest(".component").find(".view").find(".media");
        if (media.find(".media-right").length){
            var mediaObjectHtml = media.find(".media-right").html();
            media.find(".media-right").remove();
            media.prepend("<div class=\"media-left\">" + mediaObjectHtml + "</div>");
        }
    });
    $(".canvas").on("click", "#rightMediaObject", function(e){
        e.preventDefault();
        var media = $(this).closest(".component").find(".view").find(".media");
        if (media.find(".media-left").length){
            var mediaObjectHtml = media.find(".media-left").html();
            media.find(".media-left").remove();
            media.append("<div class=\"media-right\">" + mediaObjectHtml + "</div>");
        }
    });
    $(".canvas").on("click", "#topMediaObject", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".media-left, .media-right").removeClass("media-middle media-bottom");
    });
    $(".canvas").on("click", "#middleMediaObject", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".media-left, .media-right").removeClass("media-middle media-bottom");
        $(this).closest(".component").find(".view").find(".media-left, .media-right").addClass("media-middle");
    });
    $(".canvas").on("click", "#bottomMediaObject", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".media-left, .media-right").removeClass("media-middle media-bottom");
        $(this).closest(".component").find(".view").find(".media-left, .media-right").addClass("media-bottom");
    });
    $(".canvas").on("click", ".media-object", function(e){
        e.preventDefault();
        $(this).closest(".media").find("input").trigger('click');
    });

    /**
     *
     */
    $(".canvas").on("keyup", "#setListGroupAmounts", function(e){
        e.preventDefault();
        var uid = $(this).parent().attr("value");
        $("#"+uid).empty();
        for(var count=0; count<$(this).val(); count++){
            $("#"+uid).append(
                "<li class='list-group-item' contenteditable='true'>List Group Item</li>");
        }
    });
    $(".canvas").on("click", "#listGroupEmpty", function(e){
        e.preventDefault();
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).empty();
        } else{
            $(this).closest(".component").find(".view").find(".list-group").empty();
        }
    });
    $(".canvas").on("click", "#listGroupAddItems", function(e){
        e.preventDefault();
        var node = "<li class=\"list-group-item\" contenteditable=\"true\">List Group Item</li>";
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).append(node);
        } else{
            $(this).closest(".component").find(".view").find(".list-group").append(node);
        }
    });
    $(".canvas").on("click", "#listGroupAddLinkItems", function(e){
        e.preventDefault();
        var node = "<a href=\"#\" class=\"list-group-item\" contenteditable=\"true\">Link Item</a>";
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).append(node);
        } else{
            $(this).closest(".component").find(".view").find(".list-group").append(node);
        }
    });
    $(".canvas").on("click", "#listGroupAddButtonItems", function(e){
        e.preventDefault();
        var node = "<button type=\"button\" class=\"list-group-item\" contenteditable=\"true\">Button Item</button>";
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).append(node);
        } else{
            $(this).closest(".component").find(".view").find(".list-group").append(node);
        }
    });
    $(".canvas").on("click", "#listGroupAddDisabledItems", function(e){
        e.preventDefault();
        var node = "<a href=\"#\" class=\"list-group-item disabled\" contenteditable=\"true\">Disabled Item</a>";
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).append(node);
        } else{
            $(this).closest(".component").find(".view").find(".list-group").append(node);
        }
    });
    $(".canvas").on("click", "#listGroupAddContent", function(e){
        e.preventDefault();
        var node = "<a href=\"#\" class=\"list-group-item\"><h4 class=\"list-group-item-heading\" contenteditable=\"true\">List Group Item Heading</h4><p class=\"list-group-item-text\" contenteditable=\"true\">List group content. List group content. List group content. List group content. List group content. List group content.</p></a>";
        var uid = $(this).parent().attr("value");
        if (uid){
            $("#"+uid).append(node);
        } else{
            $(this).closest(".component").find(".view").find(".list-group").append(node);
        }
    });

    /**
     *
     */
    $(".canvas").on("click", "#panelEmpty", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".innerElementProperties").remove();
        $(this).closest(".component").find(".view").find(".panel").empty();
    });
    $(".canvas").on("click", "#panelAddHeading", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        if (selector.find(".panel-heading").length){
            selector.find(".panel-heading").remove();
        } else {
            var node = "<div class=\"panel-heading\"><h3 class=\"panel-title\" contenteditable=\"true\">Panel Heading</h3></div>";
            selector.prepend(node);
        }
    });
    $(".canvas").on("click", "#panelAddFooter", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        if (selector.find(".panel-footer").length){
            selector.find(".panel-footer").remove();
        } else {
            var node = "<div class=\"panel-footer\" contenteditable=\"true\">Panel Footer</div>";
            selector.append(node);
        }
    });
    $(".canvas").on("click", "#defaultPanel", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
        selector.addClass("panel-default");
    });
    $(".canvas").on("click", "#primaryPanel", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
        selector.addClass("panel-primary");
    });
    $(".canvas").on("click", "#successPanel", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
        selector.addClass("panel-success");
    });
    $(".canvas").on("click", "#infoPanel", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
        selector.addClass("panel-info");
    });
    $(".canvas").on("click", "#warningPanel", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
        selector.addClass("panel-warning");
    });
    $(".canvas").on("click", "#dangerPanel", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        selector.removeClass("panel-default panel-primary panel-success panel-info panel-warning panel-danger");
        selector.addClass("panel-danger");
    });
    $(".canvas").on("click", "#panelAddTables", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        var node =
            "<table class=\"table\" contenteditable=\"true\">" +
                "<tbody>" +
                    "<tr><td>Row-0 Column-0</td><td>Row-0 Column-1</td><td>Row-0 Column-2</td></tr>" +
                    "<tr><td>Row-1 Column-0</td><td>Row-1 Column-1</td><td>Row-1 Column-2</td></tr>" +
                    "<tr><td>Row-2 Column-0</td><td>Row-2 Column-1</td><td>Row-2 Column-2</td></tr>" +
                "</tbody>" +
            "</table>";
        if (selector.find(".panel-footer").length){
            selector.find(".panel-footer").before(node);
        } else {
            selector.append(node);
        }
        selector.find("table").last().uniqueId();
        var uniqueId = selector.find("table").last().attr("id");
        var innerPropertyNode = renderInnerTableProperties(uniqueId);
        $(this).closest(".component").find(".view").before(innerPropertyNode);
    });
    $(".canvas").on("click", "#panelAddListGroups", function(e){
        e.preventDefault();
        var selector = $(this).closest(".component").find(".view").find(".panel");
        var node =
            "<div class='list-group'>" +
                "<li class='list-group-item' contenteditable='true'>List Group Item</li>" +
                "<li class='list-group-item' contenteditable='true'>List Group Item</li>" +
                "<li class='list-group-item' contenteditable='true'>List Group Item</li>" +
            "</div>";
        if (selector.find(".panel-footer").length){
            selector.find(".panel-footer").before(node);
        } else {
            selector.append(node);
        }
        selector.find(".list-group").last().uniqueId();
        var uniqueId = selector.find(".list-group").last().attr("id");
        var innerPropertyNode = renderInnerListGroupProperties(uniqueId);
        $(this).closest(".component").find(".view").before(innerPropertyNode);
    });

    /**
     *
     */
    $(".canvas").on("click", "#16by9ResponsiveEmbed", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".embed-responsive").removeClass("embed-responsive-16by9 embed-responsive-4by3");
        $(this).closest(".component").find(".view").find(".embed-responsive").addClass("embed-responsive-16by9");
    });
    $(".canvas").on("click", "#4by3ResponsiveEmbed", function(e){
        e.preventDefault();
        $(this).closest(".component").find(".view").find(".embed-responsive").removeClass("embed-responsive-16by9 embed-responsive-4by3");
        $(this).closest(".component").find(".view").find(".embed-responsive").addClass("embed-responsive-4by3");
    });
});

//# sourceMappingURL=all.js.map
