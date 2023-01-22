import React from 'react';

import mail from '../../../pictures/socialMediaIcons/Mail_ru.png';
import vk from '../../../pictures/socialMediaIcons/VK.png';
import ok from '../../../pictures/socialMediaIcons/OK.png';
import facebook from '../../../pictures/socialMediaIcons/Facebook.png';
import google from '../../../pictures/socialMediaIcons/Google.png';
import twitch from '../../../pictures/socialMediaIcons/Twitch.png';
import twitter from '../../../pictures/socialMediaIcons/Twitter.png';
import apple from '../../../pictures/socialMediaIcons/Apple.png';

import './SocialMedia.scss'

function SocialMedia() {
    return (
        <div className='social-media-icons'>
            <ul className='icons-list'>
                <li className='list-icon'>
                    <img class="list-icon__image" src={mail} alt='Mail_ru-icon'/>
                </li>
                <li className='list-icon'>
                    <img class="list-icon__image" src={vk} alt='VK-icon'/>
                </li>
                <li className='list-icon'>
                    <img class="list-icon__image" src={ok} alt='OK-icon'/>
                </li>
                <li className='list-icon'>
                    <img class="list-icon__image" src={facebook} alt='Facebook-icon'/>
                </li>
                <li className='list-icon'>
                    <img class="list-icon__image" src={google} alt='Google-icon'/>
                </li>
                <li className='list-icon'></li>
                <li className='list-icon'>
                    <img class="list-icon__image" src={twitch} alt='Twitch-icon'/>
                </li>
                <li className='list-icon'>
                    <img class="list-icon__image" src={twitter} alt='Twitter-icon'/>
                </li>
                <li className='list-icon'>
                    <img class="list-icon__image" src={apple} alt='Apple-icon'/>
                </li>
            </ul>
        </div>
    );
}

export default SocialMedia;