var currentEditor = null;

$(document).ready(function() {
    var contentHandle = CKEDITOR.replace('contentEditor', {
        language: 'en',
        allowedContent:true
    });
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

    $(".canvas").on("click", ".editorButton", function(e){
        e.preventDefault();
        currentEditor = $(this).parent().find('.view');
        var eText = currentEditor.html();
        contentHandle.setData(eText);
    });

    $("#saveModalContent").click(function(e){
        e.preventDefault();
        currentEditor.html(contentHandle.getData())
    });
});

function download(page_name){
    $("#savedMashupHtml").html($(".canvas").html());
    $("#savedMashupHtml").find(".removeButton, .dragButton, .editorButton, .properties, .innerElementProperties, .preview").remove();
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
    $("#savedMashupHtml").find(".removeButton, .dragButton, .editorButton, .properties, .innerElementProperties, .preview").remove();
    $("#saveSuccessMsg").show().delay(3000).fadeOut();
    return $("#savedMashupHtml").html();
}
