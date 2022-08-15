import React from 'react';
import './Help.css'

const Help = () => {
    return (
        <div className='help'>
            <div className="body-box">
                <div className='help__header'>
                    <div className='help__header-title'>Нужна помощь?</div>
                    <div className='help__header-description'>Оставьте своё сообщение и мы вам поможем</div>
                </div>
                <div className='help__form'>
                    <div className='form__inputs'>
                        <div className='select-title'>Что вам нужно?</div>
                        <select className='form-select' name="select" id="select">
                            <option disabled>Выберите пункт</option>
                            <option value="Замена картриджа">Заменить картридж</option>
                            <option value="Поломка персонального компьютерпа">Поломка персонального компьютера</option>
                            <option value="Другое">Другое</option>
                        </select>
                        <div className='item-problem'>
                            <div>Опишите свою проблему</div>
                            <textarea className='problem-textarea' placeholder='Сообщение' name="problem" id="problem"/>
                        </div>
                    </div>
                    <div className='form-submit'>
                        <div style={{textTransform: 'uppercase'}}>Отправить</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;