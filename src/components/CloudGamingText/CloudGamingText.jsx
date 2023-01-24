import React from 'react';
import './CloudGamingText.scss'
import '../styles.scss';

function CloudGamingText() {
    return (
        <div className='cloud-gaming-text'>
            <div className='section-name__wrapper'>
                <div className='section-name__hr'></div>
                <h6 className='section-name'>Облачный гейминг</h6>
            </div>
            <h2 className='section-head'>Как это работает</h2>
            <div className='cloud-gaming-text__text'>
                <p className='text'>Наши сервера запускают игру, и передают
                                    вам картинку, которой вы можете управлять
                                    в реальном времени!
                </p>
                <div className='text__hr'></div>
                <p className='text'>Приложение  запустится на ПК с процессором
                                    от 1.5 GHz , от 1 Gb RAM и доступом в интернет
                                    от 15 мбит/с на всех операционых системах
                                    Windows 7, 8, 10 MacOS и Linux.
                </p>
            </div>
            <button className='button'>
                <h3 className='button__text'>Загрузить</h3>
            </button>
        </div>
    );
}

export default CloudGamingText;