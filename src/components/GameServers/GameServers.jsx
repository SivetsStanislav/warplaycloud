import React from 'react';
import Server from '../../pictures/siteImages/Server.png';
import './GameServers.scss'
import '../styles.scss';

function GameServers() {
    return (
        <div className='game-servers'>
            <div className='section-name__wrapper'>
                <div className='section-name__hr'></div>
                <h6 className='section-name'>
                    Игровые сервера на карте
                </h6>
            </div>
            <h2 className='section-head'>
                Карта локаций
            </h2>
            <div className='game-servers__container wrapper'>
                <img src={Server} alt='ImageServerHost'/>
            </div>
        </div>
    );
}

export default GameServers;