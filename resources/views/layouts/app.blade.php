<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mashup Tool</title>
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/all.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
<body>
    <div id="app">
        <div class="container-fluid row">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Mashup Tool</a>
                    </div>
                    <ul class="nav navbar-nav navbar-left">
                        <div class="btn-group">
                            <button type="button" class="btn btn-default navbar-btn" id="designMode">
                                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                                Design
                            </button>
                            <button type="button" class="btn btn-default navbar-btn" id="previewMode">
                                <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                                Preview
                            </button>
                            <button type="button" class="btn btn-default navbar-btn" id="save">
                                <span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span>
                                Save
                            </button>
                            <button class="btn btn-default navbar-btn" href="#clear" id="clear">
                                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                Clear
                            </button>
                        </div>
                        <canvas_selector_component></canvas_selector_component>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="leftPanelContainer col-md-2">
                    <left_panel_component></left_panel_component>
                </div>
                <div class="canvasContainer col-md-10 col-sm-offset-2">
                    <canvas_component></canvas_component>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="{{ asset('/js/app.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/all.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/jquery-ui.min.js') }}"></script>
</body>
</html>
