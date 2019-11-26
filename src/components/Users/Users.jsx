import React from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.scss';
import { NavLink } from 'react-router-dom'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for ( let i = 1; i <= pagesCount; i += 1 ) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div className={s.pagination}>
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
                                ? <button className='btn' disabled={props.followingInProgress.some( id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)
                                }} >Unfollow</button>
                                : <button disabled={props.followingInProgress.some( id => id === user.id)} onClick={() => { 
                                    props.follow(user.id)
                                }} >Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status === null ? <span>Статус не установлен</span> : user.status }</div>
                        </div>
                        <div>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Users;