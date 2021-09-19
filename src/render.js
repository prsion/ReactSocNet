import React from 'react';
import ReactDOM from 'react-dom';
import Myapp from './Myapp.js';
import state from './redux/state';
import {addPost, updatePostText} from "./redux/state";
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = () => {
  ReactDOM.render(
      <BrowserRouter>
          <Myapp state={state} addPost={addPost} updatePostText={updatePostText}/>

      </BrowserRouter>, document.getElementById('root'));

}