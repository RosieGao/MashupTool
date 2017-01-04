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
                @include('layouts.navbar')
            </nav>
        </div>
        <div class="container-fluid">
            <div class="row">
                @include('layouts.leftPanel')
                @include('layouts.canvas')
            </div>
        </div>
    </div>
    <script type="text/javascript" src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
