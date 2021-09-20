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
      ]
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
      if(action.type === 'ADD-POST'){
        let newPost={
          id:5,
          message:this._state.profilePage.newPostText,
          likes:13,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
      } else
        if (action.type === 'UPDATE-POST-TEXT'){
        this._state.profilePage.newPostText=action.newText;
        this._callSubscriber(this._state);
      }

   }


}
export default store;
window.store=store;

