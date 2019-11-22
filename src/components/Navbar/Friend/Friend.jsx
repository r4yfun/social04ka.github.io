import React from 'react';
import s from './Friend.module.scss';

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src={ props.src } alt="avatar"/>
            <div>{ props.name }</div>
        </div>   
    )
}

export default Friend;