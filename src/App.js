import React from 'react';
import './App.css';
import Header from './mycomponent/Header/Header';
import Navbar from './mycomponent/Navbar/Navbar';
import News from "./mycomponent/News/News";
import {Route} from 'react-router-dom';
import DialogsContainer from "./mycomponent/Dialogs/DialogsContainer";
import UsersContainer from "./mycomponent/Users/UsersContainer";
import ProfilesContainer from "./mycomponent/Profiles/ProfilesContainer";



function App(props) {
  return (
      <div className="wrap">
        <Header/>
        <Navbar/>
        <div className="wrap_content">
          <Route path='/profiles/:userId?'
                 render={() => <ProfilesContainer />}/>
          <Route path='/dialogs'
                 render={() => <DialogsContainer />}/>
          <Route path='/users'
                 render={() => <UsersContainer />}/>

          <Route path='/news' component={News}/>

        </div>
      </div>

  );
}

export default App;

