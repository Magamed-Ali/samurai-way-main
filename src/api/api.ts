import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "84f47dfa-1d31-4766-a661-7a231b07388c"
    }
})

export const usersAPI = {
    getUsers(currentPage: any, pageSize: any){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => {
                return response.data
            })
    },
    getMe() {
        return instance.get( `auth/me`, )
            .then(response => {
                return response.data
            })
    },
    changeUnFollow(i: string) {
        return instance.delete(`follow/${i}`, )
    },
    changeFollow(i: string) {
        return instance.post(`follow/${i}`, {}, )
    }

}
/*
export const getUsers = (currentPage: any, pageSize: any) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
        .then(response => {
            return response.data
        })
}
export const getMe = () => {
    return instance.get( `auth/me`, )
        .then(response => {
            return response.data
        })
}
export const changeUnFollow = (i: string) => {
    return instance.delete(`follow/${i}`, )
}
export const changeFollow = (i: string) => {
    return instance.post(`follow/${i}`, {}, )
}*/
