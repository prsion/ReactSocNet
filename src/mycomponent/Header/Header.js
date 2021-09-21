import React from 'react';
import s from './Header.module.css';
import Clock from "./Clock/Clock";





const Header = (props) => {
return (
    <div className={s.header}>
      <div>
        <div><img src="logo192.png" alt="logo192"/></div>
      </div>
      <Clock />
    </div>


)

}


export default Header;
