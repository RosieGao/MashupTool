function initialContainer(){
    $(".canvas").sortable({
        connectWith: ".canvas, .column",
        opacity: 0.5,
        handle: ".dragButton",
        start: function(event, ui) {
        },
        stop: function(event, ui) {
        }
    });
}

$(document).ready(function() {
    initialContainer();

    $(".gridSystem").draggable({
        connectToSortable: ".canvas",
        helper: "clone",
        scroll: false,
        handle: ".preview",
        start: function (event, ui) {
        },
        drag: function (event, ui) {
            ui.helper.width("100%")
        },
        stop: function (event, ui) {
            ui.helper.removeAttr("style");
            $(".canvas .column").sortable({
                connectWith: ".canvas, .column",
                opacity: 0.5,
                handle: ".dragButton",
                start: function (event, ui) {
                },
                stop: function (event, ui) {
                }
            });
        }
    });

    // $("#components .ui-draggable").draggable({
    //     connectToSortable: ".column",
    //     helper: "clone",
    //     scroll: false,
    //     handle: ".preview",
    //     start: function (event, ui) {
    //     },
    //     drag: function (event, ui) {
    //         ui.helper.width("100%");
    //     },
    //     stop: function (event, ui) {
    //         ui.helper.removeAttr("style");
    //     }
    // });
});
