import React from 'react';
import ReactDOM from 'react-dom';
import Myapp from './Myapp.js';
import state from './redux/state';
import {addPost} from "./redux/state";

ReactDOM.render(<Myapp state={state} addPost={addPost} />, document.getElementById('root'));