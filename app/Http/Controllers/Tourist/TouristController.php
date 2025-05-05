<?php

namespace App\Http\Controllers\Tourist;

use App\Http\Controllers\Controller;
use App\Models\Tourist;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TouristController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tourist = Tourist::all();
        return Inertia::render('Tourist/Tourist', ['tourist' => $tourist]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer',
            'phone' => 'required',
            'regex:/^\+?[0-9\s]+$/',
            'min:10',
            'max:20',
            'country' => 'required|string|max:255',
            'address' => 'required|string|max:255'
        ]);

        Tourist::create($validated);
        return redirect()->back()->with('success', 'Tourist added successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tourist $tourist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tourist $tourist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $touristId)
    {
        $validateData = $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer',
            'phone' => 'required',
            'regex:/^\+?[0-9\s]+$/',
            'min:10',
            'max:20',
            'country' => 'required|string|max:255',
            'address' => 'required|string|max:255'
        ]);

        $tourist = Tourist::findOrFail($touristId);
        $tourist->update([
            'name' => $validateData['name'],
            'age' => $validateData['age'],
            'phone' => $validateData['phone'],
            'country' => $validateData['country'],
            'address' => $validateData['address'],
        ]);
        return redirect()->back()->with('success', 'Updated successfully');


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tourist $tourist, $id)
    {
        $tourist = Tourist::findOrFail($id);
        $tourist->delete();
        return redirect()->back()->with('success', 'tourist deleted');
    }
}
