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
            $(".canvas .column").sortable({
                connectWith: ".column",
                opacity: 0.5,
                handle: ".dragButton",
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

//# sourceMappingURL=all.js.map
