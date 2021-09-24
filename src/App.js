import React from 'react';
import './App.css';
import Profiles from './mycomponent/Profiles/Profiles';
import Header from './mycomponent/Header/Header';
import Navbar from './mycomponent/Navbar/Navbar';
import News from "./mycomponent/News/News";
import {Route} from 'react-router-dom';
import DialogsContainer from "./mycomponent/Dialogs/DialogsContainer";



function App(props) {
  return (
      <div className="wrap">
        <Header/>
        <Navbar/>
        <div className="wrap_content">
          <Route path='/profiles'
                 render={() => <Profiles />}/>
          <Route path='/dialogs'
                 render={() => <DialogsContainer />}/>
          <Route path='/news' component={News}/>
        </div>
      </div>

  );
}

export default App;

