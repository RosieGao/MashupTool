<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->delete();

        User::create(array(
            'name'     => 'Rosie Gao',
            'email'    => 'gym9255@gmail.com',
            'password' => Hash::make('123456789'),
        ));
    }
}
