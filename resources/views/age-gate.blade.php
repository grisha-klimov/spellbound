@extends('layouts.main')
@section('content')
    <div class="age-gate">
        <div class="age-gate__wrapper">
            <div class="age-gate__logo-spellbound">
                <img src="{{URL::asset('assets/images/logo_spellbound.png')}}" alt="spellbound">
            </div>
            <div class="age-gate__content">
                <div class="age-gate__logo-rvroadtrip">
                    <img src="{{URL::asset('assets/images/logo_rvroadtrip.png')}}" alt="rvroadtrip">
                </div>
                <div id="age-gate-form" class="age-gate__form">
                    <form action="{{ route('ageGate.store') }}" method="post">
                        @csrf
                        <div class="age-gate__title"> Are you over the age of 21?</div>
                        <label class="age-gate__title-birth" for="enterbirth">By entering the RV Roadtrip with
                            Spellbound Wines Sweepstakes website, you acknowledge that you are of legal drinking age in
                            the country where this site is accessed.</label>
                        <div class="age-gate__btn-wrapper">
                            <button name="button" type="submit" class="age-gate__btn">ENTER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
@endsection
