import React from "react";
import style from './Users.module.css';
import * as axios from "axios";


class Users extends React.Component {
  constructor(props){
        super(props);
       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
          this.props.setUsers(response.data.items)
        });
  }




render(){
  return<div>
    <button onClick={this.getUsers}>getUsers </button>
    {this.props.users.map( u => <div className={style.main} key={u.id}>
      <div className={style.left}>
        <div><img src={u.photos.small !==null ? u.photos.small: "cris.jpg" } alt=""/>
        </div>
        <div>
          {u.followed
              ? <button onClick = { () => {this.props.unfollow(u.id) } }>Unfollow</button>
              : <button onClick = { () => {this.props.follow(u.id) } }>Follow</button>}

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
}

export default Users;