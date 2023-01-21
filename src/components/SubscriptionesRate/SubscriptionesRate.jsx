import React from 'react';
import ChouseButton from './ChouseButton/ChouseButton';
import './SubscriptionesRate.scss'

function SubscriptionesRate() {
    //const blue = 'blue';
    //const dark = 'dark';

    return (
        <div className='subscriptiones-rates__container'>
            <div className='shadow'></div>
            <ul className='subscriptiones-rates'>
                <li className='rate'>
                    <div className='text-wrapper'>
                        <p className='text-wrapper__header'>
                            Почасовая<br />
                            оплата</p>
                        <p className='text-wrapper__price'>45 р. - час</p>
                        <h5 className='text-wrapper__info'>
                            Доступно:<br />
                            Каталог игр<br />
                            Виртуальный ПК<br />
                            Безлимитная игровая сессия<br />
                        </h5>
                    </div>
                    <div className='rate__button'>
                        <ChouseButton colour='blue'/>
                    </div>
                </li>
                <li className='rate'>
                    <div className='text-wrapper'>
                        <p className='text-wrapper__header'>
                            Подписка<br />
                            максимум</p>
                        <p className='text-wrapper__price'>2999 р. - месяц</p>
                        <h5 className='text-wrapper__info'>
                            Доступно:<br />
                            Каталог игр<br />
                            Виртуальный ПК<br />
                            Игровая сессия 10 часов/день<br />
                        </h5>
                    </div>
                    <div className='rate__button'>
                        <ChouseButton colour='dark'/>
                    </div>
                </li>
                <li className='rate'>
                    <div className='text-wrapper'>
                        <p className='text-wrapper__header'>
                            Подписка<br />
                            минимум</p>
                        <p className='text-wrapper__price'>1500 р. - месяц</p>
                        <h5 className='text-wrapper__info'>
                            Доступно:<br />
                            Каталог игр<br />
                            Игровая сессия 4 часов/день<br />
                        </h5>
                    </div>
                    <div className='rate__button'>
                        <ChouseButton colour='blue'/>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default SubscriptionesRate;