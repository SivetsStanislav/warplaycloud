import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../Modal/Modal';

import './RegistrationForm.scss';

function RegistrationForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [placeholderUser, setPlaceholderUser] = useState("Почта / Телефон");
    const [placeholderPass, setPlaceholderPass] = useState("Пароль");
    const [checked, setChecked] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPass] = useState('');
    const [backgroundColourUser, setbackgroundColourUser] = useState({background: '#FFFFFF'});
    const [backgroundColourPass, setbackgroundColourPass] = useState({background: '#FFFFFF'});
    const navigate = useNavigate();

    const errors = [
        "Неверный логин",
        "Пароль, 8-15 символов(0-9, a-Z)"
    ];

    const handleUser = (e) => setUserName(e.target.value)
    const handlePass = (e) => setPass(e.target.value)
    const clearInput = () => setUserName('')
    const clearPass = () => setPass('')
    const handlePlaceholderUser = () => setPlaceholderUser(errors[0])
    const handlePlaceholderPass = () => setPlaceholderPass(errors[1])

    const navigateReg = () => {
        navigate('/')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var background = [
            {background: '#FFFFFF'},
            {background: 'rgba(252, 169, 169, 1)'}
        ]

        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passFormat = /^[a-zA-Z0-9]+$/;

        if (userName.match(mailFormat)) {
            if (password.match(passFormat) && password.length <= 7) {
                setPlaceholderUser("Почта / Телефон")
                setbackgroundColourUser(background[0])
                setbackgroundColourPass(background[1])
                handlePlaceholderPass();
                clearPass();
            } else {
            setIsSubmitted(true);
            setTimeout(() => {
                navigateReg()
            }, 3000);
          }
        } else {
            handlePlaceholderUser();
            setbackgroundColourUser(background[1])
            clearInput();
            clearPass();
        }
    };

    const renderForm = (
        <div className="form-container">
            <form className='form-main' onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        className="input-user"
                        type="text"
                        value={userName}
                        onChange={(userName) => handleUser(userName)}
                        placeholder={placeholderUser}
                        style={backgroundColourUser}
                        required
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-pass"
                        type="password"
                        value={password}
                        onChange={(password) => handlePass(password)}
                        placeholder={placeholderPass}
                        style={backgroundColourPass}
                        maxLength="15"
                        required
                    />
                </div>
                <div className="button-container">
                    <input
                        className="reg-button"
                        type="submit"
                        value="Зарегистрироваться"
                    />
                </div>
            </form>
            <div className='checkbox-container'>
                <input
                    className='checkbox'
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <h7 className='licence'>
                   Я соглашаюсь со следующими установленными правилами:
                   Политика использования файлов cookie WARPLAY.CLOUD,
                   Пользовательское соглашение WARPLAY.CLOUD, Лицензионное
                   соглашение MY.GAMES с конечным пользователем в отношении Игр,
                   Лицензионное соглашение с конечным Пользователем для
                   WARPLAY.CLOUD Игрового центра, Политика конфиденциальности
                   портала WARPLAY.CLOUD, Политика конфиденциальности
                </h7>
            </div>
        </div>
    );

    return (
        <div className="registration-form">
            {isSubmitted ? <Modal userName={userName} /> : renderForm}
        </div>
    );
}

export default RegistrationForm;