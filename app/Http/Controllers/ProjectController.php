<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Ramsey\Uuid\Uuid;

class ProjectController extends Controller
{
    public function home($project_id)
    {
        return \View::make('layouts.project', [ 'pID' => $project_id]);
    }

    public function create(){
        $user = \Auth::user();
        $uuid = Uuid::uuid1();
        $this->insertToProjectTable($user, $uuid);
        $project = $this->getLatestProject($user);
        return redirect() -> route('project.home', [ 'project_id' => $project->id]);
    }

    protected function insertToProjectTable($user, $uuid){
        return \DB::table('projects')->insert(
            ['id' => $uuid, 'user_id' => $user->id, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')]
        );
    }

    protected function getLatestProject($user){
        return \DB::table('projects')->where('user_id', $user->id)->orderBy('created_at', 'desc')->first();
    }
}
