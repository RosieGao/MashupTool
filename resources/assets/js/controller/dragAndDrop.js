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
            $(".stylingPanelContainer").empty();
            $(".stylingPanelContainer").load('../../../StylingPanelInnerHTML.html .stylingPanel');
        }
    });
});
