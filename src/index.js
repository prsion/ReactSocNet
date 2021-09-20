import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Myapp from './Myapp.js';
import store from './redux/state';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree=(state)=>{
  ReactDOM.render(
      <BrowserRouter>
        <Myapp state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>

      </BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree(store.getState());


store.subscriber(rerenderEntireTree);

serviceWorker.unregister();


