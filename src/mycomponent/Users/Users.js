import React from "react";
import style from './Users.module.css';
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i=1; i <= pageCount; i++){
      pages.push(i);
    };

  return<div>
    <div>
      {pages.map( p => {
      return <div className={style.pagination}><div className={props.currentPage === p&&style.selectPage} 
      onClick={(e)=>{props.onPageChanged (p);}}>{p}</div></div>
    })}
    </div>

        {props.users.map( u => <div className={style.main} key={u.id}>
      <div className={style.left}>
        <NavLink to={'/profiles/'+ u.id}>
        <div><img className={style.img_users} src={u.photos.small !==null ? u.photos.small: "cris.jpg" } alt=""/>
        </div>
        </NavLink>
        <div>
          {u.followed
              ? <button onClick = { () => {props.unfollow(u.id) } }>Unfollow</button>
              : <button onClick = { () => {props.follow(u.id) } }>Follow</button>}

        </div>
      </div>
      <div className={style.right}>
        <div>{`My name is=${u.name}`}</div>
        <div>{`id= ${u.id}`}</div>
        <div>{`twitter= no Data`} </div>
        <div>{`facebook= no Data`} </div>
      </div>

    </div>)
    }

  </div>



}

export default Users;