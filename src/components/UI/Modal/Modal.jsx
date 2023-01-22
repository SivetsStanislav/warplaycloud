import React from 'react';
import './Modal.scss';

function Modal(props) {

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h3 className='modal-greetings'>Добро пожаловать, {props.userName}</h3>
            </div>
        </div>
    );
}

export default Modal;