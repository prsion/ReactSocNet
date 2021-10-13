import React from "react";
import Profiles from "./Profiles";
//import * as axios from "axios";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
//import {usersAPI} from "../Api/Api";

class ProfilesContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);

  }


  render() {
    //if(!this.props.isAuth) return <Redirect to="/login" />;

   return(

		   <Profiles {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
   )
 }
}

let mapStateToProps = (state) =>({
profile: state.profilePage.profile,
status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfilesContainer);

 /*let WithUrlDataProfilesContainer = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps,{getUserProfile})(WithUrlDataProfilesContainer);*/