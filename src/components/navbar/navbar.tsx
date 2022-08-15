import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink className='link' to={'/'} >Главная</NavLink>
            <NavLink className='link' to={'/profcom'}>Профком</NavLink>
            <NavLink className='link' to={'/npa'}>НПА</NavLink>
            <NavLink className='link' to={'/search'}>Поиск</NavLink>
            <NavLink className='link' to={'/log'}>Журнал выездов</NavLink>
            <NavLink className='link' to={'help'}>Помощь</NavLink>
            <NavLink className='link' to={'login'}>Войти</NavLink>
        </div>
    );
};

export default Navbar;