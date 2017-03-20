<?php

use Ramsey\Uuid\Uuid;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/login', array('uses' => 'Auth\LoginController@showLoginForm'));

Route::post('login', array('uses' => 'Auth\LoginController@login'));

Route::get('/logout', array('uses' => 'Auth\LoginController@logout'));

Route::get('/homepage', function () {
    return view('layouts.homepage');
});

Route::get('/mashup', function () {
    return view('layouts.app');
});

Route::get('/{project_id}', [
    'as' => 'project.home',
    'uses' => 'ProjectController@index',
])->where('project_id', Uuid::VALID_PATTERN);
