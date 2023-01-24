import React from 'react';
import CloudGamingText from '../CloudGamingText/CloudGamingText';
import './CloudGaming.scss'

function CloudGaming() {
    return (
        <div className='cloud-gaming'>
            <div className='cloud-gaming__container'>
                <div className='cloud-gaming__content'>
                    <CloudGamingText />
                </div>
            </div>
        </div>
    );
}

export default CloudGaming;