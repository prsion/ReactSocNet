import {usersAPI} from "../mycomponent/Api/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRES = 'TOGGLE_IS_FOLLOWING_PROGRES'
//const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


/*props.setUsers([
    {id:1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:false, fullName: "Max", status:"Im space cadet", location:{city:"Chicago", country:"Usa"}},
    {id:2, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:true, fullName: "Sasha", status:"Im deep immersed..", location:{city:"Kharkov", country:"Ukraine"}},
    {id:3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:false, fullName: "James", status:"Im moon about", location:{city:"Toronto", country:"Canada"}},
    {id:4, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQ1qjtECFvsSrmNG0QF9asoymDBHw7sILwQ&usqp=CAU", followed:true, fullName: "Mishel", status:"Are you kidding me?",location:{city:"Bordo", country:"France"}},
  ]*/

let initialState = {
  users:[],
  pageSize: 5,
  totalUsersCount: 50,
  currentPage:1,
  isFetching: false,
	followingInProgress : []
}


const usersReducer = (state=initialState , action) => {
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
    case SET_USERS:
      //return {...state, users: [...state.users, ...action.users]}
      return {...state, users: action.users}

    case SET_CURRENT_PAGE:
      return {...state, currentPage:action.currentPage}

    case TOGGLE_IS_FETCHING:
      return {...state, isFetching:action.isFetching}

			case TOGGLE_IS_FOLLOWING_PROGRES:
				return {
					...state, 
					followingInProgress: action.isFetching
					?	[...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
				
				
				}

    /*case SET_TOTAL_USERS_COUNT:{
      return {...state, totalUsersCount:action.count}

    }*/
    default: return state;
  }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRES, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then(data=>{
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
    /*this.props.setTotalUsersCount(response.data.totalCount);*/
  });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then(response=>{
      if (response.data.resultCode === 0){
          dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then(response=>{
      if (response.data.resultCode === 0){
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

//export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount});
export default usersReducer;