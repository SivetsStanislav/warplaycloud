import React from 'react';
import SubscriptionesRate from '../SubscriptionesRate/SubscriptionesRate';

import './Subscriptiones.scss'
import '../styles.scss';


function Subscriptiones() {
    return (
        <div className='subscriptiones__section'>
            <div className='section-name__wrapper'>
                <div className='section-name__hr'></div>
                <h6 className='section-name'>Гибкие тарифы</h6>
            </div>
            <h2 className='section-head'>Доступные подписки</h2>
            <SubscriptionesRate />
            <div className='subscriptiones__hr'></div>
        </div>
    );
}

export default Subscriptiones;