import * as axios from "axios";


export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    //"API-KEY": "ace34fb7-fd40-4634-9016-78a7009a5337"
		"API-KEY": "21921fa7-a5f4-4928-b155-999f6a2404a0"
  }
})

export const usersAPI = {
  getUsersApi(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
          return responce.data;
        });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId){
    return instance.get(`profile/${userId}`);
  }

}

export const authApi = {
  me(){
  return instance.get(`auth/me`);
  }
}


/*
export const getUsers2 = (currentPage = 1, pageSize = 5) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(responce => {
        return responce.data;
      });
}*/
