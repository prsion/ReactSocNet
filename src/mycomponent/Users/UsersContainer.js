import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, toggleIsFetchingAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import spinner from "./../../../src/assets/images/spinner.gif";
import Preloader from "../Common/Preloader";


class UsersContainer extends React.Component{
  componentDidMount(){
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
      this.props.setUsers(response.data.items);
      this.props.toggleIsFetching(false);
      /*this.props.setTotalUsersCount(response.data.totalCount);*/
    });

  }
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
      this.props.setUsers(response.data.items);
      this.props.toggleIsFetching(false);
    });
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
    isFetching: state.usersPage.isFetching
  }

}
let mapDispatchToProps = (dispatch) => {
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
    /*setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    }*/

  }

}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);