import React from 'react';
import { Link } from 'react-router-dom';
import './ChouseButton.scss'

function ChouseButton(colour) {
    console.log(colour);
    return (
        <button className={colour.colour}>
            <Link to={`/registration`} className='chouse'>
                Выбрать
            </Link>
        </button>
    );
}

export default ChouseButton;