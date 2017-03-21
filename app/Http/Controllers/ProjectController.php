<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Ramsey\Uuid\Uuid;

class ProjectController extends Controller
{
    public function index()
    {
        return view('layouts.app');
    }

    public function create(){

        $user = \Auth::user();

        $uuid = Uuid::uuid1();

        \DB::table('projects')->insert(
            ['id' => $uuid, 'user_id' => $user->id, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')]
        );

        $project = \DB::table('projects')->where('user_id', $user->id)->first();

        return redirect() -> route('project.home', [ 'project_id' => $project->id ]);
    }
}
