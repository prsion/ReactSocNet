import React from 'react';
import s from './Header.module.css';
import Clock from "./Clock/Clock";
import facebook from"./../../assets/images/facebook.png"
import {NavLink} from "react-router-dom";



const Header = (props) => {
return (
    <div className={s.header}>
      <div>
        <div><img src={facebook}/></div>
      </div>
      <Clock />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login:<NavLink className={s.loginBlock} to={"/login"}>Login</NavLink>}

      </div>
    </div>


)

}


export default Header;
