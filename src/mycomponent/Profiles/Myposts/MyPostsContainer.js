import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";




let mapStateToProps = (state) =>{

  return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
  }
}
  let mapDispatchToProps = (dispatch) =>{
    return{
      updateNewPostText : (text) => {
        let action = updatePostTextActionCreator(text);
        dispatch(action);
      },
      addPost :() => {
          dispatch(addPostActionCreator());
        }
    }
  }


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);
export default MyPostsContainer;