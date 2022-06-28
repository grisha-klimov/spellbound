@extends('layouts.main')

@section('header')
    @include('layouts.header')
@endsection

@section('content')


    <div class="reg-form">
        <h1 class="reg-form__title">Fill out the form below for your chance to win! </h1>

        <form action="{{ route('main.store') }}" method="post" class="reg-form__form @if (count($errors) > 0) scroll-to @endif">
            @csrf
            <div class="reg-form__row">
                <label class="reg-form__label">Name</label>
                <input type="text" name="name" class="reg-form__input" autocomplete="off" value="{{ old('name') }}">
                @error('name')
                <div class="form-error">{{ $message }}</div>
                @enderror
            </div>
            <div class="reg-form__row">
                <label class="reg-form__label">Email</label>
                <input type="email" name="email" class="reg-form__input" autocomplete="off" value="{{ old('email') }}">
                @error('email')
                <div class="form-error">{{ $message }}</div>
                @enderror
            </div>
            <div class="reg-form__row">
                <label class="reg-form__label"> Phone Number </label>
                <input type="text" class="reg-form__input reg-form__phone" name="phone_number" class="reg-form__phone"
                       value="{{ old('phone_number') }}">
                @error('phone_number')
                <div class="form-error">{{ $message }}</div>
                @enderror
            </div>
            <div class="reg-form__row">
                <label class="reg-form__label">Date of Birth</label>
                <input type="text" name="birthdate" class="reg-form__input datepicker-input" autocomplete="off"
                       value="{{ old('birthdate') }}">
                @error('birthdate')
                <div class="form-error">{{ $message }}</div>
                @enderror
            </div>

            <div class="reg-form__row">
                <label class="reg-form__label">Address</label>
                <input type="text" name="address" class="reg-form__input" value="{{ old('city') }}">
                @error('address')
                <div class="form-error">{{ $message }}</div>
                @enderror
            </div>

            <div class="reg-form__row">
                <label class="reg-form__label">City</label>
                <input type="text" name="city" class="reg-form__input" value="{{ old('city') }}">
                @error('city')
                <div class="form-error">{{ $message }}</div>
                @enderror
            </div>

            <div class="reg-form__columns">
                <div class="reg-form__column reg-form__column--state">
                    <label class="reg-form__label">State</label>
                    <select class="reg-form__select" name="state" placeholder="" autocomplete="off">
                        <option value=""></option>
                        @foreach($states as $state)
                            <option {{ old('state') == $state ? 'selected' : '' }}
                                      value="{{$state}}">{{$state}}</option>
                        @endforeach
                    </select>
                    @error('state')
                    <div class="form-error">{{ $message }}</div>
                    @enderror
                </div>
                <div class="reg-form__column reg-form__column--zip">
                    <label class="reg-form__label">Zip</label>
                    <input type="text" name="zipcode" class="reg-form__input" value="{{ old('zipcode') }}">
                    @error('zipcode')
                    <div class="form-error">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="reg-form__row">
                <div class="select2-full-wrap">
                    <label class="reg-form__label">How did you hear about this sweepstakes?</label>
                    <select class="reg-form__select" name="how_did_hear" placeholder="" autocomplete="off">
                        <option value=""></option>
                        @foreach($how_did_hear as $value)
                            <option {{ old('how_did_hear') == $value ? 'selected' : '' }}
                                    value="{{$value}}">{{$value}}</option>
                        @endforeach
                    </select>
                    @error('how_did_hear')
                    <div class="form-error">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="reg-form__checkbox checkboxes-itm checkbox">
                <label class="checkboxes-itm__label" for="confirm_agreement">
                    <input class="checkboxes-itm__input" type="checkbox" id="confirm_agreement" value="yes" name="confirm_agreement" {{ old('confirm_agreement') == 'yes' ? 'checked' : '' }}>
                    <div class="checkboxes-itm__svg">
                        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28"/>
                            <path d="M0 7.77778L6.22222 14L18.6667 0" transform="translate(4.81068 7.76627)"></path>
                        </svg>
                    </div>
                    <div class="checkboxes-itm__text">
                        I agree to the
                        <a class="checkboxes-itm__link" target="_blank" href="/rules.pdf">Official Rules.</a>
                    </div>
                </label>
                @error('confirm_agreement')
                <div class="form-error">{{ $message }}</div>
                @enderror
            </div>

            <div class="reg-form__checkbox checkboxes-itm checkbox">
                <label class="checkboxes-itm__label" for="email_subscription">
                    <input class="checkboxes-itm__input" type="checkbox" name="email_subscription" value="yes" id="email_subscription" {{ old('email_subscription') == 'yes' ? 'checked' : '' }}>
                    <div class="checkboxes-itm__svg">
                        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28"/>
                            <path d="M0 7.77778L6.22222 14L18.6667 0" transform="translate(4.81068 7.76627)"></path>
                        </svg>
                    </div>
                    <div class="checkboxes-itm__text">
                        I want to sign up to receive the latest offers and happenings with the Spellbound team! |
                        <a href="https://www.spellboundwines.com/Legal/Privacy-Policy" target="blank">Privacy Policy</a>
                    </div>
                </label>
            </div>
            <div class="reg-form__row">
                <button class="reg-form__btn">SUBMIT</button>
            </div>
        </form>
    </div>

@endsection

@section('footer')
    @include('layouts.footer')
@endsection