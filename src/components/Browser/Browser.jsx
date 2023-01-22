import React from 'react';
import BrowserText from '../BrowserText/BrowserText';
import './Browser.scss'

function Browser() {
    return (
        <div className='browser'>
            <BrowserText />
            <div className='shadow__container'>
                <div className='shadowl'></div>
            </div>
        </div>
    );
}

export default Browser;