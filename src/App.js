import React from 'react';
import './App.css';
import Profiles from './mycomponent/Profiles/Profiles';
import Dialogs from './mycomponent/Dialogs/Dialogs';
import Header from './mycomponent/Header/Header';
import Navbar from './mycomponent/Navbar/Navbar';
import News from "./mycomponent/News/News";
import {Route} from 'react-router-dom';



function App(props) {
  return (
      <div className="wrap">
        <Header/>
        <Navbar/>
        <div className="wrap_content">
          <Route path='/profiles'
                 render={() => <Profiles store={props.store}/>}/>
          <Route path='/dialogs'
                 render={() => <Dialogs store={props.store} />}/>
          <Route path='/news' component={News}/>
        </div>
      </div>

  );
}

export default App;

