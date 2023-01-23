import React from 'react';
import { useState } from 'react';
import HeaderPicture from '../HeaderPicture/HeaderPicture';
import NavBar from '../NavBar/NavBar';
import './Header.scss'

function Header() {
    const [isToggle, setIsToggle] = useState(false)

    return (
        <div className='header'>
            <NavBar />
            <HeaderPicture />
            <div className='vl__top'></div>
            <div className='header__container'>
                <h3 className='header-text'>Сервис облачного гейминга</h3>
                <h1 className='header-title'>Преврати свое устройство в игровое</h1>
            </div>
            <button className='header-button'>UPGRADE</button>
            <div className='burger-button__container'>
                <button 
                    className='burger-button'
                    onClick={() => setIsToggle(!isToggle)}
                ></button>
            </div>
            {isToggle ?
                <div className='burger__wrapper'>
                    <div className='burger-logo'></div>
                    <ul className='burger-menu'>
                        <li className='burger-item'>Главная</li>
                        <li className='burger-item'>Сервера</li>
                        <li className='burger-item'>Скачать</li>
                        <li className='burger-item'>Открыть в браузере</li>
                        <li className='burger-item'>Цены</li>
                        <li className='burger-item'>Тех поддержка</li>
                        <li className='burger-item'>Контакты</li>
                    </ul>
                    <div className='burger-social'></div>
                    <div className='burger-hr'></div>
                    <button
                        className='burger-return'
                        onClick={() => setIsToggle(!isToggle)}
                    ></button>
                </div> :
                <div style={{display: 'none'}}></div>
            }
            <div className='vl__bottom'></div>
        </div>
    );
}

export default Header;