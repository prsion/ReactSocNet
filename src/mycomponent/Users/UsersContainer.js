import React from "react";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {usersAPI} from "../Api/Api";

class UsersContainer extends React.Component{
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

    render() {
     return<>
       {this.props.isFetching ? <Preloader/> :null }
      <Users pageSize = {this.props.pageSize}
                   currentPage ={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users = {this.props.users}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
                   totalUsersCount ={this.props.totalUsersCount}
                   followingInProgress= {this.props.followingInProgress}
     />
      </>
    }

}


let mapStateToProps = (state) =>{
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
  }

}
/*let mapDispatchToProps = (dispatch) => {
  return{
   follow: (userId) =>{
          dispatch(followAC(userId));
      },
    unfollow: (userId) =>{
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber));
    },
    toggleIsFetching: (isFetching) =>{
     dispatch(toggleIsFetchingAC(isFetching))
    }
    /!*setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    }*!/

  }

}*/


export default connect(mapStateToProps,    {follow,unfollow,setCurrentPage,toggleFollowingProgress,getUsers})(UsersContainer);