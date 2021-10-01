import React from "react";
import Profiles from "./Profiles";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";

class ProfilesContainer extends React.Component{

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response=>{
            this.props.setUserProfile(response.data);
    });
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

export default connect(mapStateToProps,{setUserProfile})(ProfilesContainer);