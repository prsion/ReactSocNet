import React from "react";
import {connect} from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {usersAPI} from "../Api/Api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
             currentPage = {this.props.currentPage}
             onPageChanged = {this.onPageChanged}
             users = {this.props.users}
             follow = {this.props.follow}
             unfollow = {this.props.unfollow}
             totalUsersCount = {this.props.totalUsersCount}
             followingInProgress = {this.props.followingInProgress}
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,    {follow,unfollow,toggleFollowingProgress,getUsers})
)
(UsersContainer);

//export default withAuthRedirec
// (connect(mapStateToProps,    {follow,unfollow,toggleFollowingProgress,getUsers})(UsersContainer));