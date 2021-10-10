import React from "react";
import Profiles from "./Profiles";
//import * as axios from "axios";
import {getUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
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
   return(
		 
		   <Profiles {...this.props} profile={this.props.profile}/>
   )
 }
}
let mapStateToProps = (state) =>({
profile: state.profilePage.profile
});

 let WithUrlDataProfilesContainer = withRouter(ProfilesContainer);
export default connect(mapStateToProps,{getUserProfile})(WithUrlDataProfilesContainer);