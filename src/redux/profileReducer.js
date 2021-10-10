import {usersAPI} from "../mycomponent/Api/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState =  {
  posts:[
    {id:1, message:'React its cool  ', likes:10},
    {id:2, message:'Hi how are you?', likes:40},
    {id:3, message:'bla bla bla bla....', likes:11},

  ],
  newPostText: '',
  profile: null
}


const profileReducer = (state=initialState , action) => {


	switch(action.type){
    case ADD_POST:
      let newPost={
         id:6,
         message:state.newPostText,
         likes:18,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText:action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }


    default: return state;
  }


}

export const addPostActionCreator = () => ({type: ADD_POST });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile});
export const getUserProfile = (userId)=>(dispatch) => {
  usersAPI.getProfile(userId).then(response=>{
    dispatch(setUserProfile(response.data));
  });
};

export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;