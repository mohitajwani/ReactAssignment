import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://react-training-wal-api.herokuapp.com",
    withCredentials: true,
    responseType: "json",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance;