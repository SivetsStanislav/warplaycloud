import React from 'react';
import MainPicture from '../MainPicture/MainPicture';
import NavBar from '../NavBar/NavBar';
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <NavBar />
            <MainPicture />
        </div>
    );
}

export default Header;