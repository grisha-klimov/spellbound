<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|unique:clients,email|email:rfc,dns',
            'phone_number' => 'required',
            'birthdate' => 'required|date',
            'address' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|size:2',
            'zipcode' => 'required|regex:/\b\d{5}\b/',
            'how_did_hear' => 'required',
            'confirm_agreement' => 'accepted',
            'email_subscription' => '',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Please enter your name',
            'email.required' => 'Please enter your email',
            'email.unique' => 'This email is already registered in the system',
            'email.email' => 'Valid email required',
            'phone_number.required' => 'Please enter your phone number',
            'birthday.required' => 'Please enter your birthday',
            'address.required' => 'Please enter your address',
            'city.required' => 'Please enter your city',
            'state.required' => 'Please enter your state',
            'zipcode.required' => 'Please enter your zipcode',
            'zipcode.regex' => 'Valid zipcode',
            'how_did_hear.required' => 'Please select an option',
            'confirm_agreement.accepted' => 'You must agree to the Official Rules',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}