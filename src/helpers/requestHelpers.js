import  axios  from "axios";


const api=axios.create({
    baseURL:"https://d4da-103-16-69-133.ngrok-free.app",
    timeout:5000,
    headers:{'X-Custom_Header':'foobar'}
})



const getApi=()=>{

}

export const postApi = (method, url, data) => {
    return api({
      method: method,
      url: url,
      data: data
    }).then((response) => {
      return response;
    }).catch((error) => {
      return error;
    });
  }
  
const deleteApi=()=>{

}
const putApi=()=>{

}


api.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });