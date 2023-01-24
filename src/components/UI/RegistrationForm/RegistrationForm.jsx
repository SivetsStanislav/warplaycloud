import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../Modal/Modal';

import './RegistrationForm.scss';

function RegistrationForm() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [checked, setChecked] = useState(false);
    const [userName, setUserName] = useState('')
    const navigate = useNavigate();

    const errors = {
        uname: "Неверный логин",
        pass: "Пароль должен содержать 8-15 символов (числа, латиница)"
    };

    const handleUser = (e) => setUserName(e.target.value)

    const navigateReg = () => {
        navigate('/')
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passFormat = /^[a-zA-Z0-9]+$/;

        if (uname.value.match(mailFormat)) {
            if (pass.value.match(passFormat) && pass.value.length <= 7) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
            setIsSubmitted(true);
            setTimeout(() => {
                navigateReg()
            }, 3000);
          }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form-container">
            <form className='form-main' onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        className="input"
                        type="text"
                        name="uname"
                        value={userName}
                        onChange={(userName) => handleUser(userName)}
                        placeholder="Почта / Телефон"
                        required
                    />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <input
                        className="input"
                        type="password"
                        name="pass"
                        placeholder="Пароль"
                        maxLength="15"
                        required
                    />
                    {renderErrorMessage("pass")}
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