import React from "react";
import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import cris from'./../../assets/images/cris.jpg'

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
        <div><img className={style.img_users} src={u.photos.small !==null ? u.photos.small: cris } alt=""/>
        </div>
        </NavLink>
        <div>
          {u.followed
              ? <button onClick = {
                () => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                    withCredentials: true,
                    headers : {
                      "API-KEY": "ace34fb7-fd40-4634-9016-78a7009a5337"
                    }
                  }).then(response=>{
                    if (response.data.resultCode === 0){
                        props.unfollow(u.id)
                    }
                  });
                }}>Unfollow</button>
              : <button onClick = {
                () => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                    withCredentials: true,
                    headers : {
                      "API-KEY": "ace34fb7-fd40-4634-9016-78a7009a5337"
                    }
                  }).then(response=>{
                    if (response.data.resultCode === 0){
                      props.follow(u.id)
                    }
                  });
                }}>Follow</button>}

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