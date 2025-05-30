<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Tourist\TouristController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/tourist', function () {
    return Inertia::render('Tourist/Tourist');
})->middleware(['auth', 'verified'])->name('tourist.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/tourist')->group(function () {
    Route::get('/', [TouristController::class, 'index'])->name('tourist.index');
  
});



require __DIR__ . '/auth.php';
