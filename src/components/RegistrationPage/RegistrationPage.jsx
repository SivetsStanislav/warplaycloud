import React from 'react';
import RegistrationForm from '../UI/RegistrationForm/RegistrationForm';
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
            </div>
        </div>
    );
}

export default RegistrationPage;