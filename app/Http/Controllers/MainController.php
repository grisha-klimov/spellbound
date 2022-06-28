<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Requests\StoreRequest;

class MainController extends Controller
{
    public function index(Request $request)
    {
        $states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
            'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY',
            'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE',
            'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR',
            'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI',
            'VA', 'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];

        $how_did_hear = [
            'Neck Tag',
            'SpellboundWines.com',
            'Social Media',
            'Advertisement',
            'Email',
            'Forward from a friend',
            'Other'
        ];

        if (($request->session()->get('age_gate_passed'))):
            return view('main', compact('states', 'how_did_hear'));
        else:
            return redirect()->route('ageGate.index');
        endif;
    }

    public function store(StoreRequest $request, Client $client)
    {
        $data = $request->validated();
        Client::create($data);
        return redirect()->route('main.thankYou');
    }

    public function thankYou()
    {
        return view('thank-you');
    }
}