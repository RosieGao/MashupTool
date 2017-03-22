<?php

namespace App\Http\Controllers;

class HomepageController extends Controller
{
    public function home()
    {
        $user = \Auth::user();

        $projects = \DB::table('projects')->where('user_id', $user->id)->get();

        return \View::make('layouts.homepage')->with(compact('projects'));
    }
}
