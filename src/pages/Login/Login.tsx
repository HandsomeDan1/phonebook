import React from 'react';
import './Login.css'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className='login'>
            <div className="body-box">
                <h2>Войти в профиль</h2>
                <div className='login-form'>
                    <div className='login-inputs'>
                        <div>
                            <div>Логин</div>
                            <input type="text"/>
                        </div>
                        <div>
                            <div>Пароль</div>
                            <input type="password"/>
                        </div>
                    </div>
                    <div className='login-btns'>
                        <div className='login-button'>Войти</div>
                        <div className='login-remember'>
                            <input type="checkbox"/>
                            <div>Запомнить меня</div>
                        </div>
                    </div>
                </div>
                <div className='login-links'>
                    <Link to='/account-restore'>Забыли пароль?</Link>
                    <Link to='/register'>Ещё нет учётной записи?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;