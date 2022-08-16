import axios from 'axios'
import qs from 'qs';
import Vue from 'vue'
import { Toast } from 'vant'
import store from '@/store'
import { getToken } from '@/utils/auth'

Vue.use(Toast)

const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 1000*60 // request timeout
    
})

service.interceptors.request.use(
    config => {
        // do something before request is sent
        // if (store.getters.token) {
        //     config.headers['zzszhxy-token'] = getToken()
        // }
        // console.log(config);
        config.headers['zzszhxy-token'] = getToken()
      
        if (config.method === 'post') {
            // const isdata = Object.getOwnPropertyNames(config.data).length == 0 ? true: false;
            const contentType = config.headers["Content-Type"];
            if (contentType && contentType.indexOf("multipart/form-data") == 0) {
              return config
            } else {
                config.data = qs.stringify(config.data, { arrayFormat: 'repeat', allowDots: true });
                return config
            }
        }
       
    }, error => {
        console.log('interceptors', error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        // console.log('response', response) // for debug
        // return response.data;
        let matchUrl = response.request.responseURL.match(response.config.url);
        if (matchUrl != null) {
          return response.data;
        } else {
          store.dispatch("LogOut").then(() => {
            window.location.href =
              "/sd-login/loginRedirect?linkUrl=" + window.location.pathname;
          });
        }
    },
    error => {
        // console.log('response error', error.status) // for debug
        return Promise.reject(error)
    }
)

export default service