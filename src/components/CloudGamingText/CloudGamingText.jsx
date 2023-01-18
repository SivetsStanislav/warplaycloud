import React from 'react';
import './CloudGamingText.scss'

function CloudGamingText() {
    return (
        <div className='cloud-gaming-text'>
            <div className='cloud-gaming-text__section-name'>
                <div className='section-name__hr'></div>
                <h6 className='section-name'>Облачный гейминг</h6>
            </div>
            <div className='cloud-gaming-text__head'>
                <h2 className='head'>Как это работает</h2>
            </div>
            <div className='cloud-gaming-text__text'>
                <p className='text'>Наши сервера запускают игру, и передают<br />
                                    вам картинку, которой вы можете управлять<br />
                                    в реальном времени!
                </p>
                <div className='text__hr'></div>
                <p className='text'>Приложение  запустится на ПК с процессором<br />
                                    от 1.5 GHz , от 1 Gb RAM и доступом в интернет<br />
                                    от 15 мбит/с на всех операционых системах<br />
                                    Windows 7, 8, 10 MacOS и Linux.
                </p>
            </div>
            <div className='cloud-gaming-text__download'>
                <button className='download-button'>
                    <h3 className='download-button__text'>Загрузить</h3>
                </button>
            </div>
        </div>
    );
}

export default CloudGamingText;