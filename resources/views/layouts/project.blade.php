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
<div class="container">
    <div class="row">
        <div class="text-center createNewButton">
            <a style="color: gainsboro" onclick="window.location.reload()" target="_blank" href="{{ route('page.create', [ 'project_id' => $pID ])}}">
                <i class="fa fa-plus-square-o" aria-hidden="true" style="font-size: 15em;"></i>
            </a>
        </div>
    </div>
    <div id="pagesThumbnail" class="row">
        @foreach ($pages as $page)
            <div class="col-sm-6 col-md-3">
                <a style="color: black" class="thumbnail text-center" target="_blank" href="{{ route('page.home', [ 'project_id' => $pID, 'page_name' => $page->name ])}}">
                    <i class="fa fa-file-o" aria-hidden="true" style="font-size: 10em;"></i>
                    <div class="caption">
                        <h2 id="projectName" contenteditable="true">{{ $page->name }}</h2>
                    </div>
                </a>
            </div>
        @endforeach
    </div>
</div>
<script type="text/javascript" src="{{ asset('/js/app.js') }}"></script>
<script type="text/javascript" src="{{ asset('/js/all.js') }}"></script>
<script type="text/javascript" src="{{ asset('/js/jquery-ui.min.js') }}"></script>
<script>
</script>
</body>
</html>
