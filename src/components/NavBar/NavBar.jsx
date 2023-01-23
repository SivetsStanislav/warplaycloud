import React from 'react';
import './NavBar.scss';

function NavBar() {
    return (
        <div className='navBar'>
            <div className='logo__blue'></div>
            <ul className='navBar__list'>
                <li className='navBar__list-item'>Главная</li>
                <li className='navBar__list-item'>Сервера</li>
                <li className='navBar__list-item'>Скачать</li>
                <li className='navBar__list-item'>Открыть в браузере</li>
                <li className='navBar__list-item'>Цены</li>
                <li className='navBar__list-item'>Тех поддержка</li>
                <li className='navBar__list-item'>Контакты</li>
            </ul>
        </div>
    );
}

export default NavBar;