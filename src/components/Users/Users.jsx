import React from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.scss';
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for ( let i = 1; i <= pagesCount; i += 1 ) {
        pages.push(i)
    }

    return (
        <div>
            <div>
               {pages.map( p => {
                    return <span onClick={ () => {props.onPageChanged(p)} } className={props.currentPage === p && s.selectedPage}> {p} </span>
               })}
            </div>
            {
                props.users.map(user => <div key={user.id} className={s.user}>
                    <div className={s.userAvatar}>
                        <div className={s.avatar}>
                            <NavLink to={'/profile/' + user.id} >
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { 
                                    
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'bc0e91b5-d53d-4e53-b4e3-1faa569353dd'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0 ) {
                                            props.unfollow(user.id) 
                                        } 
                                    })

                                }} >Unfollow</button>
                                : <button onClick={() => { 

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'bc0e91b5-d53d-4e53-b4e3-1faa569353dd'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0 ) {
                                            props.follow(user.id) 
                                        } 
                                    })

                                }} >Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div>
                            <span>{user.name}</span>
                            <span>{user.status}</span>
                        </div>
                        <div>
                            <span>{'user.location.city'}</span>
                            <span>{'user.location.country'}</span>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Users;