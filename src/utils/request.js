import { httpTipsMap } from '@/configs';
import {
  URL,
  LOAD,
  LOUOUT,
  LOGIN,
  isDev,
  ASSET_DETAIL,
  noRedirectLoginPath,
} from '@/constants';
import {
  getToken,
  getPlatformToken,
  getItems,
  wrapParams,
  tipsConfirm,
  isUd,
  tips,
  getLang,
  removeItems,
  debounce,
} from '@/utils';
import { history } from 'umi';
import axios from 'axios';
// import debounce from 'lodash/debounce';
// axios.defaults.baseURL = URL
// axios.defaults.timeout = 30000
// axios.defaults.headers.common['Authorization'] = getItems('token')

// 封装的项目通用的 请求方法 操作
// 支持 根据请求方式 自动判别是否显示操作 tips
export const NORMAL_CODE = 200;
export const AUTH_FAIL = 104000;
// export const AUTH_FAIL = 104007;

const codeMap = {
  100: '正常码',
  // 100000: '正常码',
  105001: '系统错误',
  104000: '用户认证错误',
  104001: '错误的验证信息',
  104002: '参数错误',
  104003: '用户不存在',
  104004: '密码错误',
  104005: '第三方API错误',
  104006: 'API访问错误',
};

export const getCodeMsg = code => {
  // const {code,  } = data
  const codeItem = codeMap[code];
  // return true//
  return codeItem || `${code} - 未知状态码！`;
};

const statusMap = {
  404: '404 请求路径不存在！',
  500: '500 服务端报错！',
};

export const getStatusMsg = (status, url) => {
  const statusItem = statusMap[status];
  return statusItem || `${url} - 未知状态！`;
};

export const isTips = res => {
  console.log('  isTips  !res ', !res, res);
  if (!res) {
    tips('Unknown error！', 2);
    return;
  }

  const { status, data, config } = res;
  const { msgEG, code } = data;
  // const { noTips } = config.data;
  const { noTips, noTipsAll } = res.config.customInfo;
  const { url } = config;

  // console.log(
  //   ' 提示 对吗  code !== NORMAL_CODE ',
  //   history,
  //   window,
  //   res,
  //   code,
  //   // res.data,
  //   config,
  //   config.datas,
  //   res.config.customInfo,
  //   url,
  // );
  if (noTipsAll) {
    return;
  }

  if (code === 100) {
    console.log(' 11111111 ： '); //
    // history.push(LOGIN);
    // return;
  }
  console.log(' 11111111 22222 ： '); //
  if (statusMap[status]) {
    tips(statusMap[status], 2);
    return;
  }
  if (code !== NORMAL_CODE || (status != NORMAL_CODE && !noTips)) {
    const codeMsg = getCodeMsg(code);
    tips(msgEG || codeMsg, 2);
    return;
  }
  // console.log(' res.config.method ： ', res.config.method, res.config.method !== 'get' )//
  if (res.config.method !== 'get' && !noTips) {
    tips(msgEG, code != NORMAL_CODE ? 2 : 1);
  }
  // if ((noTips == undefined && noTips !== true)) {
  //   tips(msgEG, status != NORMAL_CODE ? 2 : 1);
  // }
  return;
};

const instance = axios.create({
  baseURL: URL,
  timeout: 300000,
  // timeout: 0,
});

export const handleParams = params => {
  if (params.d_id) {
    delete params.d_id;
  }
  if (params.action) {
    delete params.action;
  }
  return params;
};

export class Request {
  http = null;

  constructor() {
    this.http = instance;
    // console.log(' super ： ',  )
    this.http.interceptors.request.use(
      config => {
        config.headers.token = getToken();
        // console.log('langlanglang LanguageLanguage：', getLang(),  )
        // config.headers.Authorization = getItems('token');
        // config.headers.authorization =
        //   'AFAJWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjAzMTA0NzY1LCJlbWFpbCI6IiJ9.TRDom9uskFCpxECSODg02bnQEeqhgS55pohcVfFvD98';
        // this.http.store.dispatch({type: LOAD, data: true})
        //console.log(' codeExist 配置发送请求的信息 1s：', config, config.params, config.data, config.method, config.method === 'get' ? isUd(config.params) : isUd(config.data))
        const { method } = config;
        // if (method === 'get') {
        //   debounce(http.get(url, { params: params }), 5000)
        // }

        // config.data = wrapParams(config.data);
        const formatParams = wrapParams(
          config.method === 'get' || config.method === 'delete'
            ? config.params
            : config.data,
        );

        // config.data = config.datas = wrapParams(
        //   config.method === 'get' || config.method === 'delete'
        //     ? config.params
        //     : config.data,
        // );
        config.customInfo = handleParams(formatParams);
        const { noTips, extraPayload, ...rest } = formatParams;
        // if (config.params) {
        //   const { noTips, ...rest } = config.params;
        //   config.data = config.params = rest;
        // }
        if (config.method === 'post') {
          // config.data = rest; // 支持 delete 传递 body 参数
        } else if (config.method !== 'put') {
          config.data = config.params = rest;
        }
        if (config.data.baseURL) {
          config.baseURL = config.data.baseURL;
        }

        // console.log(' 发送请求   ： ', config, formatParams);
        return config;
      },
      err => Promise.reject(err),
    );

    this.http.interceptors.response.use(
      res => {
        // this.http.store.dispatch({type: LOAD, data: false})
        console.log(' 返回请求 ： ', res.data);
        // tipsConfirm(res);
        this.handleResponse(res);

        // console.log(' 返回请求22s ： ', res.data,   )//
        // return res.data
        const { data, ...rest } = res.data;
        // console.log('  对吗  res.data ', res.data, res.data.code !== 200);
        // if (res.data.code !== 200) {
        //   return
        // }

        return res.data;
      },
      err => {
        console.log(' 请求发生错误了：', err, err.message, err.response, {
          ...err,
        });
        this.handleResponse(err.response);
        if (err.message.indexOf('timeout') > -1) {
          tips('请求超时！', 0);
        } else {
          console.log(
            ' 错误 ： ',
            { ...err.response },
            err.response,
            err.response,
          );
          // // tips(err.response != undefined ? err.response.data.message : 'o(╥﹏╥)o ' , 0)
          // if (err.response.status == 406) {
          //     tips(err.response && err.response.data.message ? err.response.data.message : '没有数据', 0)
          // } else if (err.response.status == 401) {
          // // } else if (err.status == 401) {
          //     // window.location.href = '#/login'
          //     tips(err.response.data.message ? err.response.data.message : err.response.data, 0)
          //     // tips(err.response.data, , 0)
          // } else {
          //     tips(err.response && err.response.data.message ? err.response.data.message : '失败 ', 0)
          // }
        }
        return Promise.reject(err);
      },
    );
  }
  handleResponse = res => {
    // console.log(' handleResponse,  , ： ', res);
    isTips(res);
  };
}

export const request = new Request();
const { http } = request;
// console.log(' request ： ', request, URL, {...http},  )//
//
export const parseUrl = (url, params) => URL + url;

// export const get = (url, params) => new Promise((resolve, reject) => debounce(resolve(http.get(url, { params: params }), 5000)));
// export const get = (url, params) => new Promise((resolve, reject) => debounce(http.get(url, { params: params }), 5000));
// export const get = (url, params) => debounce(http.get, url, { params: params }, 500);
export const get = (url, params) => http.get(url, { params: params });
export const post = (url, params, o) => http.post(url, params, o);
export const put = (url, params) => http.put(url, params);
export const patch = (url, params) => http.patch(url, params);
export const remove = (url, params) => http.delete(url, { params });
// export const remove = (url, params) => http.delete(url, {data: {dataAttr: params}, params: {paramsAttr: params, }, });

// 不显示 tips 的方法
export const noTipsGet = (url, params) =>
  // get(url, { ...params, noTips: true } );
  {
    // console.log(' getListAsync paramsparamsparams ： ', params,  )//
    return get(url, { ...params, noTips: true });
  };
export const noTipsPost = (url, params) =>
  post(url, { ...params, noTips: true });
export const noTipsPut = (url, params) => put(url, { ...params, noTips: true });
export const noTipsPatch = (url, params) =>
  patch(url, { ...params, noTips: true });
export const noTipsRemove = (url, params) =>
  remove(url, { ...params, noTips: true });

// export const blobPost = (url, params, o) => http.post(url, {...params, noTips: true}, o)
export const blobGet = (url, params, o) =>
  http({
    method: 'get',
    url,
    data: { ...params, noTips: true },
    responseType: 'blob',
  });
export const blobPost = (url, params, o) =>
  http({
    method: 'post',
    url,
    data: { ...params, noTips: true },
    responseType: 'blob',
  });

export const req = {
  get,
  post,
  put,
  patch,
  remove,
  noTipsGet,
  noTipsPost,
  noTipsPut,
  noTipsPatch,
  noTipsRemove,
  blobGet,
  blobPost,
};
