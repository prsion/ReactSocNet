import React from 'react';
import './Myapp.css';
import Profiles from './mycomponent/Profiles/Profiles';
import Dialogs from './mycomponent/Dialogs/Dialogs';
import Header from './mycomponent/Header/Header';
import Navbar from './mycomponent/Navbar/Navbar';
import News from "./mycomponent/News/News";
import {Route} from 'react-router-dom';



function Myapp(props) {
  return (
      <div className="wrap">
        <Header/>
        <Navbar/>
        <div className="wrap_content">
          <Route path='/profiles'
                 render={() => <Profiles state={props.state.profilePage} dispatch={props.dispatch} />}/>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
          <Route path='/news' component={News}/>
        </div>
      </div>

  );
}

export default Myapp;

