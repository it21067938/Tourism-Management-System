<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tourist extends Model
{
    protected $fillable = [
        'name',
        'age',
        'phone',
        'country',
        'address',
    ];
}
