import React from 'react';
import allRightsReserved from '../../pictures/logo/AllRightsReserved.png';
import design from '../../pictures/logo/Design.png';
import icons from '../../pictures/icons/SocialMediaIcons.png';
import './Footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='logo__white'></div>
                <ul className='footer-list left'>
                    <li className='list-item'>
                        <img src={allRightsReserved} alt='all Rights Reserved' />
                    </li>
                    <li className='list-item'>
                        <img src={design} alt='design' />
                    </li>
                </ul>
                <ul className='footer-list right'>
                    <li className='list-item'>Контакты</li>
                    <li className='list-item'>Политика конфиденциальности</li>
                    <li className='list-item'>Файлы Coocie</li>
                    <li className='list-item icons'>
                        <div className='icons-block'>
                            <img src={icons} alt='vk discord youTube' />
                        </div>
                    </li>
                </ul>
                </div>
        </div>
    );
}

export default Footer;