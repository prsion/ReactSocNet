import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unfollow,toggleFollowingProgress} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {usersAPI} from "../Api/Api";

class UsersContainer extends React.Component{
  componentDidMount(){
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data=>{
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
      /*this.props.setTotalUsersCount(response.data.totalCount);*/
    });

  }
  onPageChanged = (pageNumber) => {
		
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data=>{
			this.props.setUsers(data.items);
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
                   toggleFollowingProgress= {this.props.toggleFollowingProgress}
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


export default connect(mapStateToProps,
    {
      follow,
      unfollow,
      setUsers,
      setCurrentPage,
      toggleIsFetching,
			toggleFollowingProgress
    }
    )(UsersContainer);