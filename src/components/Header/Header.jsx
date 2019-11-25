import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to='/login' >Login</NavLink> }
                
            </div>
        </div>
    )
}

export default Header;