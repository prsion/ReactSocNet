import React from "react";
import style from './Users.module.css';
import * as axios from "axios";


class Users extends React.Component {
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
      this.props.setUsers(response.data.items);
      /*this.props.setTotalUsersCount(response.data.totalCount);*/

    });

  }
onPageChanged = (pageNumber) =>{
  this.props.setCurrentPage(pageNumber)
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
    this.props.setUsers(response.data.items)
  });
}

render(){
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for(let i=1; i <= pageCount; i++){
      pages.push(i);
    }

  return<div>
    <div>
      {pages.map( p => {
      return<span className={this.props.currentPage===p &&style.selectPage}
      onClick={(e)=>{this.onPageChanged(p);}}>{p}</span>
    })}
    </div>

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