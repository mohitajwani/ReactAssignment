import axiosInstance from './index'

export function login(email, password) {
    return axiosInstance.post("/users", {
        email,
        password
    })
}