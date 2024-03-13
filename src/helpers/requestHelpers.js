import  axios  from "axios";


const api=axios.create({
    baseURL:"http://35.200.249.150:3000/",
    timeout:5000,
    headers:{'X-Custom_Header':'foobar'}
})


api.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers["source"] = `IS_USER_RELATED`;

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



const getApi=()=>{

}

export const postApi = (method, url, data) => {
    return api({
      method: method,
      url: url,
       data
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

