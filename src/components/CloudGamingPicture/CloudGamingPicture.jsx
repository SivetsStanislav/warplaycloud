import React from 'react';
import imageServerHost from '../../pictures/siteImages/ImageServerHost.png';
import './CloudGamingPicture.scss';

function CloudGamingPicture() {
    return (
        <div className='cloud-gaming-picture__container wrapper'>
            <img src={imageServerHost} alt='ImageServerHost'/>
        </div>
    );
}

export default CloudGamingPicture;