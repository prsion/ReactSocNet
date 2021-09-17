import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Myapp.css';
import Profiles from './mycomponent/Profiles/Profiles';
import Dialogs from './mycomponent/Dialogs/Dialogs';
import Header from './mycomponent/Header/Header';
import Navbar from './mycomponent/Navbar/Navbar';
import News from "./mycomponent/News/News";



function Myapp(props) {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header/>
        <Navbar/>
        <div className="wrap_content">
          {/*<Route path ='/news' component ={News}/>	*/}
          <Route path='/profiles' render={() => <Profiles state={props.state.profilePage} addPost={props.addPost}/>}/>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
          <Route path='/news' component={News}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default Myapp;

