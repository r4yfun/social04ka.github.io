import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for ( let i = 1; i <= pagesCount; i += 1 ) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                   {pages.map( p => {
                        return <span onClick={ () => {this.onPageChanged(p)} } className={this.props.currentPage === p && s.selectedPage}> {p} </span>
                   })}
                </div>
                {
                    this.props.users.map(user => <div key={user.id} className={s.user}>
                        <div className={s.userAvatar}>
                            <div className={s.avatar}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { this.props.unfollow(user.id) }} >Unfollow</button>
                                    : <button onClick={() => { this.props.follow(user.id) }} >Follow</button>
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
}

export default Users;