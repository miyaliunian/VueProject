/* eslint-disable prefer-promise-reject-errors */
import Vue from 'vue';
import Axios from 'axios';
import { Toast } from 'vant';

Vue.use(Toast);

Axios.defaults.timeout = 120000;
Axios.defaults.headers = { 'Content-Type': 'application/json;charset=UTF-8' };

const tip = (msg) => {
  Toast({
    message: msg,
    duration: 1500,
    forbidClick: true,
  });
};

Axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

Axios.interceptors.response.use(
  (response) => {
    // store.dispatch('setOverlay', { load: false });
    if (response.status === 200) {
      return response.data;
    }
    return Promise.reject(response);
  },
  (error) => {
    // store.dispatch('setOverlay', { load: false });
    if (error.code === 'ECONNABORTED' || error.message.indexOf('timeout') !== -1) {
      tip('请求超时');
    }
    return Promise.reject({});
  },
);

export function post(url, bodyParam = '') {
  return new Promise((resolve, reject) => {
    Axios.post(url, JSON.stringify(bodyParam))
      .then((res) => {
        resolve(res);
        // if (res.infocode && res.infocode === 1) {
        //   resolve(res.data);
        // } else {
        //   reject({ msg: '数据出错请重试!' });
        // }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function get(url) {
  return new Promise((resolve, reject) => {
    Axios.get(url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
