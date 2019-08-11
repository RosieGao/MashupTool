<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $primaryKey = 'id';

    protected $fillable = [
        'name', 'storage_path'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
