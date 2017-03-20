<?php

namespace App\Http\Controllers;

class ProjectController extends Controller
{
    public function index()
    {
        $user = \Auth::user();

        $project = $user->project();

        return \Redirect::route('project.home', [ 'project_id' => $project->id ]);
    }
}
