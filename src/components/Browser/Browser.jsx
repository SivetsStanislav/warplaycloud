import React from 'react';
import BrowserText from '../BrowserText/BrowserText';
import ImageBrowser from '../../pictures/siteImages/ImageBrowser.png';
import './Browser.scss'

function Browser() {
    return (
        <div className='browser'>
            <BrowserText />
            <div className='browser__shadowl'></div>
            <div className='browser__shadowll'></div>
            <div className='image-browser__container wrapper'>
                <img src={ImageBrowser} alt='ImageBrowser'/>
            </div>
        </div>
    );
}

export default Browser;