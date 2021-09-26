const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState =  {
  users:[
    {id:1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:false, fullName: "Max", status:"Im space cadet", location:{city:"Chicago", country:"Usa"}},
    {id:2, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:true, fullName: "Sasha", status:"Im deep immersed..", location:{city:"Kharkov", country:"Ukraine"}},
    {id:3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:false, fullName: "James", status:"Im moon about", location:{city:"Toronto", country:"Canada"}},
    {id:4, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:true, fullName: "Mishel", status:"Are you kidding me?",location:{city:"Bordo", country:"France"}},
  ],
}


const profileReducer = (state=initialState , action) => {
  switch(action.type){
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId){
            return {...u, followed:true};
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId){
            return {...u, followed:false};
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}

    }



    default: return state;
  }


}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default profileReducer;