import React from 'react';
import HeaderPicture from '../HeaderPicture/HeaderPicture';
import NavBar from '../NavBar/NavBar';
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <NavBar />
            <HeaderPicture />
            <div className='vl__top'></div>
            <h3 className='header-text'>Сервис облачного гейминга</h3>
            <h1 className='header-title'>Преврати свое устройство в игровое</h1>
            <button className='header-button'>UPGRADE</button>
            <div className='vl__bottom'></div>
        </div>
    );
}

export default Header;