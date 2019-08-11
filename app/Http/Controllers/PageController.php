<?php

namespace App\Http\Controllers;

use Carbon\Carbon;

class PageController extends Controller
{
    public function home($project_id, $page_name)
    {
        $storage_path = \DB::table('project_pages')
            ->where('project_id', $project_id)
            ->where('name', $page_name)
            ->first()
            ->storage_path;

        return \View::make('layouts.app')->with(compact('storage_path'));
    }

    public function create($project_id){

        $this->insertToPageTable($project_id);

        $page= $this->getIndexPage($project_id);

        $this->createLocalPageFile($page);

        return redirect() -> route('page.home', [ 'project_id' => $project_id, 'page_name' => $page->name ]);
    }

    protected function insertToPageTable($project_id){
        $id = \DB::table('project_pages')->where('project_id', $project_id)->get()->count();
        $name = 'untitledPage'.($id+1);

        $relative_path = \DB::table('projects')->where('id', $project_id)->first()->storage_path;
        $storage_path = $relative_path.'/'.$name.'.html';

        return \DB::table('project_pages')->insert(
            [
                'project_id' => $project_id,
                'name' => $name,
                'storage_path' => $storage_path,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]
        );
    }

    protected function getIndexPage($project_id){
        return \DB::table('project_pages')->where('project_id', $project_id)->orderBy('created_at', 'desc')->first();
    }

    protected function createLocalPageFile($page){
        $localPageFile = $page->storage_path;
        $fh = fopen($localPageFile, 'w');
        $content = "Here should be the html code";
        return fwrite($fh, $content);
    }
}
