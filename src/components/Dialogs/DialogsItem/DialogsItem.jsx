import React from 'react';
import s from './../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path} className={s.dialog}>
            <img src={props.src} alt="avatar"/>
            <span>
                {props.name}
            </span>
        </NavLink>
    )
}

export default DialogsItem;