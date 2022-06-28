<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AgeGateController extends Controller
{
    public function index(Request $request)
    {
        return view('age-gate');
    }

    public function store(Request $request)
    {
        $request->session()->put('age_gate_passed', true);
        return redirect()->route('main.index');
    }
}
