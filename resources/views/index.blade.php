<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mashup Tool</title>
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <h1>@{{ message }}</h1>

        <input v-model="message">

        <pre>
           @{{ $data | json }}
        </pre>
    </div>

    <script type="text/javascript" src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
