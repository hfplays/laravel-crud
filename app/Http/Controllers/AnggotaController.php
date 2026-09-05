<?php

namespace App\Http\Controllers;

use App\Models\Anggota;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $anggotas = Anggota::latest()->paginate(10);

        return Inertia::render('anggota/index',[
            'anggotas'=>$anggotas,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('anggota/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nomor_anggota'=>'required|string|max:50|unique:anggotas,nomor_anggota',
            'nama'=>'required|string|max:225',
            'email'=>'nullable|email|max:225',
            'no_hp'=>'nullable|string|max:20',
            'alamat'=>'nullable|string',
            'tanggal_bergabung'=>'nullable|date',
            'status'=>'required|in:aktif,nonaktif',
        ]);

        Anggota::create($validated);

        return redirect()
        ->route('anggota.index')
        ->with('success','Anggota berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Anggota $anggota)
    {
        return Inertia::render('anggota/show', [
            'anggota' => $anggota,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $anggota = Anggota::findOrFail($id);

        return Inertia::render('anggota/edit',[
            'anggota'=>[
                'id'=>$anggota->id,
                'nomor_anggota'=>$anggota->nomor_anggota,
                'nama'=>$anggota->nama,
                'email'=>$anggota->email,
                'no_hp'=>$anggota->no_hp,
                'alamat'=>$anggota->alamat,
                'tanggal_bergabung'=>$anggota->tanggal_bergabung
                    ?$anggota->tanggal_bergabung->format('Y-m-d')
                    :null,
                'status'=>$anggota->status,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $anggota = Anggota::findOrFail($id);

        $validated = $request->validate([
            'nomor_anggota'=>'required|string|max:50|unique:anggotas,nomor_anggota,'.$anggota->id,
            'nama'=>'required|string|max:225',
            'email'=>'nullable|email|max:225',
            'no_hp'=>'nullable|string|max:20',
            'alamat'=>'nullable|string',
            'tanggal_bergabung'=>'nullable|date',
            'status'=>'required|in:aktif,nonaktif',
        ]);

        $anggota->update($validated);

        return redirect()
        ->route('anggota.index')
        ->with('success','Data berhasil ditambahkan');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $anggota = Anggota::findOrFail($id);

        $anggota->delete();

        return redirect()
        ->route('anggota.index')
        ->with('success','Anggota berhasil di hapus');
    }
}
