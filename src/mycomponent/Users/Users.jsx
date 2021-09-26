import React from "react";
import style from './Users.module.css';


const Users = (props) => {
  return<div>
    {props.users.map( u => <div className={style.main} key={u.id}>
        <div className={style.left}>
          <div><img src={u.photoUrl} alt=""/>
          </div>
          <div>
            {u.followed
                ? <button onClick = { () => {props.unfollow(u.id) } }>Unfollow</button>
                : <button onClick = { () => {props.follow(u.id) } }>Follow</button>}

          </div>
        </div>
          <div className={style.right}>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
            <div>{u.location.country} </div>
            <div>{u.location.city} </div>
          </div>

    </div>)
    }

     </div>
}

export default Users;