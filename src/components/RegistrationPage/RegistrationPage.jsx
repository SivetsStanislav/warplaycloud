import React from 'react';
import RegistrationForm from '../UI/RegistrationForm/RegistrationForm';
import SocialMedia from '../UI/SocialMedia/SocialMedia';
import './RegistrationPage.scss';

function RegistrationPage() {
    return (
        <div className='registration-page'>
            <div className='registration-page__container'>
                <div className='container__header'>
                    <div className='arrow'></div>
                    <h1 className='registration'>Регистрация</h1>
                    <p className='login'>Вход</p>
                </div>
                <RegistrationForm />
                <div className='social-media'>
                    <div className='social-media__hr'></div>
                    <h7 className='social-media__text'>Войти через</h7>
                    <div className='social-media__hr'></div>
                </div>
                <SocialMedia />
            </div>
        </div>
    );
}

export default RegistrationPage;