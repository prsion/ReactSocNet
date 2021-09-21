import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Myapp from './Myapp.js';
import store from './redux/state';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree=(state)=>{
  ReactDOM.render(
      <BrowserRouter>
        <Myapp state={state} dispatch={store.dispatch.bind(store)} store={store} />

      </BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree(store.getState());


store.subscriber(rerenderEntireTree);

serviceWorker.unregister();


