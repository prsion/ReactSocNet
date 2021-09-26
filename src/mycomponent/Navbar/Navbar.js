import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <ul>
                <li><NavLink to="/profiles" activeClassName={s.active}>Profiles</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;
