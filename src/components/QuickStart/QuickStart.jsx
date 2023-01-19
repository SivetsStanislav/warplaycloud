import React from 'react';
import QuickStartIcons from '../QuickStartIcons/QuickStartIcons';
import './QuickStart.scss';
import '../styles.scss';


function QuickStart() {
    return (
        <div className='quick-start__section'>
            <div className='section-name__wrapper'>
                <div className='section-name__hr'></div>
                <h6 className='section-name'>Быстрый старт</h6>
            </div>
            <h2 className='section-head'>Начни играть</h2>
            <QuickStartIcons />
            <button className='button'>
                    <h3 className='button__text'>Начать</h3>
            </button>
        </div>
    );
}

export default QuickStart;