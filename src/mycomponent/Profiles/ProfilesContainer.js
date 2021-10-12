import React from "react";
import Profiles from "./Profiles";
//import * as axios from "axios";
import {getUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
//import {usersAPI} from "../Api/Api";

class ProfilesContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = 2;
    }
    this.props.getUserProfile(userId);

    /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response=>{
            this.props.setUserProfile(response.data);
    });*/
  }


  render() {
    if(!this.props.isAuth) return <Redirect to="/login" />;

   return(

		   <Profiles {...this.props} profile={this.props.profile}/>
   )
 }
}
let mapStateToProps = (state) =>({
profile: state.profilePage.profile,
  isAuth: state.auth.isAuth

});

 let WithUrlDataProfilesContainer = withRouter(ProfilesContainer);
export default connect(mapStateToProps,{getUserProfile})(WithUrlDataProfilesContainer);