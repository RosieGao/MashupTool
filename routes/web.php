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

Route::get('/homepage', [
    'as' => 'homepage',
    'uses' => 'HomepageController@home',
]);

Route::get('/project', [
    'as' => 'project.create',
    'uses' => 'ProjectController@create',
]);

Route::get('/project/{project_id}', [
    'as' => 'project.home',
    'uses' => 'ProjectController@home',
])->where('project_id', Uuid::VALID_PATTERN);

Route::get('/project/{project_id}/page',  [
    'as' => 'page.create',
    'uses' => 'PageController@create',
])->where('project_id', Uuid::VALID_PATTERN);

Route::get('/project/{project_id}/page/{page_name}', [
    'as' => 'page.home',
    'uses' => 'PageController@home',
])->where('project_id', Uuid::VALID_PATTERN);
