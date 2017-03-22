<?php

namespace App\Http\Controllers;

use Carbon\Carbon;

class PageController extends Controller
{
    public function home()
    {
        return view('layouts.app');
    }

    public function create($project_id){

        $this->insertToPageTable($project_id);

        $page= $this->getIndexPage($project_id);

        return redirect() -> route('page.home', [ 'project_id' => $project_id, 'page_name' => $page->name ]);
    }

    protected function insertToPageTable($project_id){
        return \DB::table('project_pages')->insert(
            ['project_id' => $project_id, 'name' => 'untitled', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')]
        );
    }

    protected function getIndexPage($project_id){
        return \DB::table('project_pages')->where('project_id', $project_id)->orderBy('created_at', 'desc')->first();
    }
}
