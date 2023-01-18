import React from 'react';
import AppleArcade from '../../pictures/icons/AppleArcade';
import DownloadFromTheCloud from '../../pictures/icons/DownloadFromTheCloud';
import Library from '../../pictures/icons/Library';
import MailContact from '../../pictures/icons/MailContact';
import './QuickStartIcons.scss';

function QuickStartIcons() {
    return (
        <div className='icons__conatiner'>
            <ul className='icons__list'>
                <li className='icon__container'>
                    <MailContact />
                    <p className='icon__text'>Создай аккаунт</p>
                </li>
                <div className='icon__hr'></div>
                <li className='icon__container'>
                    <DownloadFromTheCloud />
                    <p className='icon__text'>Скачай модуль</p>
                </li>
                <div className='icon__hr'></div>
                <li className='icon__container'>
                    <Library />                    
                    <p className='icon__text'>Выбери тариф</p>
                </li>
                <div className='icon__hr'></div>
                <li className='icon__container'>
                    <AppleArcade />
                    <p className='icon__text'>Начни играть</p>
                </li>
            </ul>
        </div>
    );
}

export default QuickStartIcons;