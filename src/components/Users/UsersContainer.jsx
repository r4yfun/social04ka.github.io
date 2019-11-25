import React from 'react';
import { connect } from 'react-redux';
import { unfollow, follow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching( true )
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
        .then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching( true )
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.toogleIsFetching(false)
        })
    }

    render() {
        return (
            <>
                { this.props.isFetching ? 
                    <Preloader /> : null }
                <Users totalUsersCount={this.props.totalUsersCount} 
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toogleIsFetching: (isFetching) => {
//             dispatch(toogleIsFetching(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, 
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching })(UsersContainer)