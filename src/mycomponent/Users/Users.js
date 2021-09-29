import React from "react";
import style from './Users.module.css';


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
        <div><img src={u.photos.small !==null ? u.photos.small: "cris.jpg" } alt=""/>
        </div>
        <div>
          {u.followed
              ? <button onClick = { () => {props.unfollow(u.id) } }>Unfollow</button>
              : <button onClick = { () => {props.follow(u.id) } }>Follow</button>}

        </div>
      </div>
      <div className={style.right}>
        <div>{u.name}</div>
        <div>{u.status}</div>
        <div>{'u.location.country'} </div>
        <div>{'u.location.city'} </div>
      </div>

    </div>)
    }

  </div>



}

export default Users;