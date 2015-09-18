<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', 'WelcomeController@index');
//
//Route::get('home', 'HomeController@index');
//
//Route::controllers([
//	'auth' => 'Auth\AuthController',
//	'password' => 'Auth\PasswordController',
//]);


Route::get('/', 'LoginController@index');
Route::post('signin', 'LoginController@create');

Route::get('signin', 'LoginController@index');


//Route::get('dashboard', 'DashboardController@index');
Route::get('dashboard', [
    'as' => 'dashboard', 
    'uses' => 'DashboardController@index'
]);


Route::group(['prefix' => 'products'], function() {
    Route::get('/', 'ProductController@index');
    Route::get('new', 'ProductController@create');
    Route::post('new', 'ProductController@store');
    Route::get('{id}', 'ProductController@show');
});
Route::group(['prefix' => 'categories'], function() {
    Route::get('/', 'CategoryController@index');
    Route::get('new', 'CategoryController@create');
    Route::post('new', 'CategoryController@store');
});