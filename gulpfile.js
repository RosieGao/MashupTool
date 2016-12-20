const elixir = require('laravel-elixir');

require('laravel-elixir-vueify');
require('laravel-elixir-webpack-official');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix
        .sass('app.scss')
        .browserify('app.js')
        .webpack('app.js');

    mix.styles([
        "animate.css",
        "font-awesome.css",
        "app.css"
    ]);

    mix.copy(
            'node_modules/bootstrap-sass/assets/fonts/bootstrap/',
            'public/fonts/bootstrap/');
});
