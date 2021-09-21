const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store={
  _state:{
    profilePage:{
      posts:[
        {id:1, message:'React its cool  ', likes:10},
        {id:2, message:'Hi how are you?', likes:40},
        {id:3, message:'bla bla bla bla....', likes:11},

      ],
      newPostText:['write smth...']
    },
    dialogsPage:{
      dialogs:[
        {id:1, name:'Dimuch'},
        {id:2, name:'Andrey'},
        {id:3, name:'Lucie'},
        {id:4, name:'Sveta'},
        {id:5, name:'Sasha'}
      ],
      messages:[
        {id:1, message:'Hi HI '},
        {id:2, message:'OOOOohohoho'},
        {id:3, message:'egegegeggey'},
        {id:4, message:'wwwaaaauuu'},
        {id:5, message:'"euuuuuuuuu'}
      ],
      newMessageText : ''
    }
  },
  _callSubscriber (){
     console.log("Stay changed");
  },

  getState() {
    return this._state;
  },
  subscriber(observer){
    this._callSubscriber = observer;
  },
   dispatch(action){
      if(action.type === ADD_POST){
        let newPost={
          id:5,
          message:this._state.profilePage.newPostText,
          likes:13,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
      } else if (action.type === UPDATE_POST_TEXT){
          this._state.profilePage.newPostText=action.newText;
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_MESSAGE_TEXT){
        this._state.dialogsPage.newMessageText=action.bodyMessage;
        this._callSubscriber(this._state);
      }
      else if (action.type === SEND_MESSAGE){
        let bodyMessage = this._state.dialogsPage.newMessageText;
        this._state.dialogsPage.newMessageText= '';
        this._state.dialogsPage.messages.push({id:6, message:bodyMessage});
        this._callSubscriber(this._state);
      }
   }
}

export const updateMessageActionCreator = (bodyMessage) => ({type: UPDATE_MESSAGE_TEXT, bodyMessage: bodyMessage});

export const sendMessageBodyActionCreator = () => ({type: SEND_MESSAGE});

export const addPostActionCreator = () => ({type: ADD_POST });

export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});


export default store;
window.store=store;

