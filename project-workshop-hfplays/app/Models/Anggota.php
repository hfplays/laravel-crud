<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Anggota extends Model
{
    protected $fillable = [
        'nomor_anggota',
        'nama',
        'email',
        'no_hp',
        'alamat',
        'tanggal_bergabung',
        'status',
    ];
    protected $casts = [
        'tanggal_bergabung'=>'date'
    ];
}
