<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mashup Tool</title>
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/all.css') }}" rel="stylesheet">
    <link href="{{ asset('/fonts/fontawesome/css/all.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
<body class="mashupLayout">
    <div id="app">
        <div class="container-fluid row">
            <nav class="navbar navbar-default">
                <div class="container-fluid" style="padding-bottom: 15px; padding-top: 15px;">
                    <div class="navbar-header-mashup">
                        <a href="#" class="navbar-brand" style="
    font-weight: bold;
    font-size: xx-large;
    font-variant: petite-caps;">Mashup Tool</a>
                    </div>
                    <ul class="nav navbar-nav navbar-left">
                        <div class="btn-group">
                            <button type="button" class="btn btn-default navbar-btn" id="mashupMode">
                                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                                Mashup
                            </button>
                            <button type="button" class="btn btn-default navbar-btn" id="previewMode">
                                <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                                Preview
                            </button>
                            <button type="button" class="btn btn-default navbar-btn" id="save"
                                    onclick="saveHtml();
                                            {{ \App\Http\Controllers\PageController::save(
                                            $storage_path, "aaa"
                                            ) }}">
                                <span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span>
                                Save
                            </button>
                            <button type="button" class="btn btn-default navbar-btn" id="download"
                                    onclick="download('{{ $page_name }}')">
                                <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>
                                Download
                            </button>
                            <button class="btn btn-default navbar-btn" href="#clear" id="clear">
                                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                Clear
                            </button>
                        </div>
                        <canvas_selector_component></canvas_selector_component>
                        <div id="saveSuccessMsg" class="btn-group" style="display:none; margin-left: 15px">
                            <h4>Saved</h4>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="container-fluid">
            <div class="row" style="top: 100px">
                <div class="leftPanelContainer col-md-2">
                    <left_panel_component></left_panel_component>
                </div>
                <div class="canvasContainer col-md-8 col-sm-offset-2">
                    <canvas_component></canvas_component>
                </div>
                <div class="propertyPanelContainer col-md-2 col-sm-offset-10">
                    <property_panel_component></property_panel_component>
                </div>
            </div>
        </div>
        <div id='savedMashupHtml' class="container-fluid" style="display: none">
        </div>
    </div>
    <script type="text/javascript" src="{{ asset('/js/app.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/all.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/jquery-ui.min.js') }}"></script>
</body>
</html>
