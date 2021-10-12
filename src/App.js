import React from 'react';
import './App.css';
import Navbar from './mycomponent/Navbar/Navbar';
import News from "./mycomponent/News/News";
import {Route} from 'react-router-dom';
import DialogsContainer from "./mycomponent/Dialogs/DialogsContainer";
import UsersContainer from "./mycomponent/Users/UsersContainer";
import ProfilesContainer from "./mycomponent/Profiles/ProfilesContainer";
import HeaderContainer from "./mycomponent/Header/HeaderContainer";
import Login from "./mycomponent/Login/Login";



function App(props) {
  return (
      <div className="wrap">
        <HeaderContainer/>
        <Navbar/>
        <div className="wrap_content">
          <Route path='/profiles/:userId?'
                 render={() => <ProfilesContainer />}/>
          <Route path='/dialogs'
                 render={() => <DialogsContainer />}/>
          <Route path='/login'
                 render={() => <Login />}/>
          <Route path='/users'
                 render={() => <UsersContainer />}/>

          <Route path='/news' component={News}/>

        </div>
      </div>

  );
}

export default App;

