import React from "react";
import Profiles from "./Profiles";
//import * as axios from "axios";
import {getUserProfile} from "../../redux/profileReducer";
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

  }


  render() {
    //if(!this.props.isAuth) return <Redirect to="/login" />;

   return(

		   <Profiles {...this.props} profile={this.props.profile}/>
   )
 }
}


//let AuthRedirectComponent = withAuthRedirect(ProfilesContainer);

/*
 !!! --- remove to second HOC in withauth redirect --- !!!

let mapStateToPropsForRedirect = (state) =>({
  isAuth: state.auth.isAuth
});
AuthRedirectComponent = connect (mapStateToPropsForRedirect)(AuthRedirectComponent);
*/



let mapStateToProps = (state) =>({
profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfilesContainer);

 /*let WithUrlDataProfilesContainer = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps,{getUserProfile})(WithUrlDataProfilesContainer);*/