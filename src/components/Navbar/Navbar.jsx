import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import Friend from './Friend/Friend';

const Navbar = (props) => {
    let friendElements = props.state.sidebar.friends.map( f => <Friend name={f.name} src={f.src} key={f.id} /> )

    return (
        <div className={s.sidebar}>
            <div className={s.logo}>
                SocialLogo
            </div>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
            <div className={s.friends}>
                <h3>Friends</h3>
                <div className={s.friendList}>
                    {friendElements}
                </div>
            </div>
        </div>   
    )
}

export default Navbar;