<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mashup Tool</title>
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/all.css') }}" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
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
                    <div class="btn-group canvas">
                        <canvas></canvas>
                        <canvas></canvas>
                        <canvas></canvas>
                        <canvas></canvas>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container-fluid">
        <div class="leftPanelContainer">
            <nav class="navbar navbar-default navbar-side" role="navigation">
                <ul class="nav">
                    <catagory></catagory>
                    <catagory></catagory>
                    <catagory></catagory>
                    <catagory></catagory>
                </ul>
            </nav>
        </div>
        <div class="canvasContainer">
            <div class="content ui-sortable">
            </div>
        </div>
    </div>
    <script type="text/javascript" src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
