<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Ramsey\Uuid\Uuid;

class ProjectController extends Controller
{
    public function home($project_id)
    {
        $pages= \DB::table('project_pages')->where('project_id', $project_id)->get();

        return \View::make('layouts.project', [ 'pID' => $project_id])->with(compact('pages'));
    }

    public function create(){
        $user = \Auth::user();
        $uuid = Uuid::uuid1();
        $this->insertToProjectTable($user, $uuid);
        $project = $this->getLatestProject($user);
        $this->createLocalProjectFolder($project);
        $this->createCSFile($project);
        return redirect() -> route('project.home', [ 'project_id' => $project->id]);
    }

    protected function insertToProjectTable($user, $uuid){
        $id = \DB::table('projects')->get()->count();
        $name = 'untitledProject'.($id+1);

        $relative_path = '/home/rosiegao/Desktop';
        $storage_path = $relative_path.'/'.$name;
        $cs_file_path = $storage_path.'/'.$name.'.cs';

        return \DB::table('projects')->insert(
            [
                'id' => $uuid,
                'user_id' => $user->id,
                'name' => $name,
                'storage_path' => $storage_path,
                'cs_file_path' => $cs_file_path,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]
        );
    }

    protected function getLatestProject($user){
        return \DB::table('projects')->where('user_id', $user->id)->orderBy('created_at', 'desc')->first();
    }

    protected function createLocalProjectFolder($project){
        return mkdir($project->storage_path);
    }

    protected function createCSFile($project){
        $CSFile = $project->cs_file_path;
        $fh = fopen($CSFile, 'w');
        $content = "";
        return fwrite($fh, $content);
    }
}
