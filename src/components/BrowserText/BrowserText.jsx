import React from 'react';
import './BrowserText.scss'
import '../styles.scss';

function BrowserText() {
    return (
        <div className='browser-text'>
            <div className='section-name__wrapper'>
                <div className='section-name__hr'></div>
                <h6 className='section-name'>Игарть можно в браузере</h6>
            </div>
            <h2 className='section-head'>
                Запускай на любых<br />
                устройствах
            </h2>
            <div className='browser-text__text'>
                <p className='text'>
                    Наш модуль доступен на все популярные ОС<br />
                    и работает на всех компьютерах.
                </p>
            </div>
            <button className='button'>
                <h3 className='button__text'>Открыть в браузере</h3>
            </button>
        </div>
    );
}

export default BrowserText;