import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Myapp from './Myapp.js';
import state, {subscriber} from './redux/state';
import {addPost, updatePostText} from "./redux/state";
import {BrowserRouter} from 'react-router-dom';

    let rerenderEntireTree = (state) => {
  ReactDOM.render(
      <BrowserRouter>
        <Myapp state={state} addPost={addPost} updatePostText={updatePostText}/>

      </BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree(state);

    subscriber(rerenderEntireTree);

  serviceWorker.unregister();