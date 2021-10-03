import React from 'react';
import s from './Header.module.css';
import Clock from "./Clock/Clock";
import facebook from"./../../assets/images/facebook.png"




const Header = (props) => {
return (
    <div className={s.header}>
      <div>
        <div><img src={facebook}/></div>
      </div>
      <Clock />
    </div>


)

}


export default Header;
