@extends('layouts.app')

@section('navbar')
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
@endsection
