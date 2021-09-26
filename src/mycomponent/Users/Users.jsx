import React from "react";
import style from './Users.module.css';


const Users = (props) => {
  if(props.users.length === 0){
  props.setUsers([
      {id:1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:false, fullName: "Max", status:"Im space cadet", location:{city:"Chicago", country:"Usa"}},
      {id:2, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:true, fullName: "Sasha", status:"Im deep immersed..", location:{city:"Kharkov", country:"Ukraine"}},
      {id:3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:false, fullName: "James", status:"Im moon about", location:{city:"Toronto", country:"Canada"}},
      {id:4, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:true, fullName: "Mishel", status:"Are you kidding me?",location:{city:"Bordo", country:"France"}},
     ]
  )
  }

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