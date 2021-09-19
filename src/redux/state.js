import {rerenderEntireTree} from '../render' ;

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'React its cool  ', likes: 10},
      {id: 2, message: 'Hi how are you?', likes: 40},
      {id: 3, message: 'bla bla bla bla....', likes: 11},

    ],
    newPostText:['write smth...']
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dimuch'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Lucie'},
      {id: 4, name: 'Sveta'},
      {id: 5, name: 'Sasha'}
    ],
    messages: [
      {id: 1, message: 'Hi HI '},
      {id: 2, message: 'OOOOohohoho'},
      {id: 3, message: 'egegegeggey'},
      {id: 4, message: 'wwwaaaauuu'},
      {id: 5, message: '"euuuuuuuuu'}
    ]
  }
}

window.state =state ;
console.log(state);

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 13,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText ='';
  rerenderEntireTree(state);

};

export let updatePostText = (newText) => {

  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);

};


export default state;