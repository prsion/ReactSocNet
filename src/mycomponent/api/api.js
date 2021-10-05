import * as axios from "axios";


export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers : {
    "API-KEY": "ace34fb7-fd40-4634-9016-78a7009a5337"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
          return responce.data;
        });
  }

}



export const getUsers2 = (currentPage =1, pageSize=5 ) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(responce => {
        return responce.data;
      });
}