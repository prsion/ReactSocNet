const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState =  {
  posts:[
    {id:1, message:'React its cool  ', likes:10},
    {id:2, message:'Hi how are you?', likes:40},
    {id:3, message:'bla bla bla bla....', likes:11},

  ],
  newPostText: ''

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


    default: return state;
  }


}

export const addPostActionCreator = () => ({type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;