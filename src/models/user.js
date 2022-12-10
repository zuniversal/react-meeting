import { init } from '@/utils/createAction';
import {
  formatSelectList,
  openNotification,
  setItem,
  getItem,
  removeItem,
  getItems,
  setItems,
} from '@/utils';
import { history } from 'umi';
import {
  HOME,
  CRM_HOME,
  CS_HOME,
  isDev,
  homeMap,
  guestModeRedirectMap,
  LOGIN,
  DEF_PALTFORM,
  ASSET_DETAIL,
  noGetUserInfoPath,
} from '@/constants';
import defaultProps, {
  managerRoutes,
  customerRoutes,
  PLATFORM,
  platformMap,
  isPlatformCRM,
} from '@/configs/routes';
import { AUTH_FAIL } from '@/utils/request';
import authData from '@/configs/auth';
import { notification } from 'antd';
import moment from 'dayjs';
const namespace = 'user';
const { createActions, createAction } = init(namespace);

export const userActions = actions;

// console.log(' actions ： ', actions,  )//
export const mapStateToProps = state => state[namespace];

const userInfo = getItem('userInfo') ? getItem('userInfo') : {};
// console.log(' userInfo ： ', userInfo);

export const logoutGuest = props => {
  console.log(' logoutGuest   ,   ： ', props);
  removeItem('isGuestMode');
  removeItem('guestModeId');
};

export const flatAuthTest = (data = []) => {
  // console.log(' flatAuthTest   ,   ： ', data, authData);
  const authConfig = {};
  data.forEach(v => {
    if (v.authKey) {
      authConfig[v.authKey] = v.authInfo;
    }
  });
  return authConfig;
};
// flatAuthTest(authData)

export const flatAuth = (authData = {}, authConfig = {}) => {
  // console.log(
  //   '  getRoutes(authData) flatAuthflatAuth   ,   ： ',
  //   authData,
  //   authConfig,
  // );
  Object.keys(authData).forEach(authKey => {
    authConfig[authKey] = authData[authKey].perms;
    // if (Object.keys(authData[authKey].sub).length) {
    if (authData[authKey].sub && Object.keys(authData[authKey].sub).length) {
      flatAuth(authData[authKey].sub, authConfig);
    }
  });
  return authConfig;
};

export const recursiveAuth = (data = [], authData = {}) => {
  // console.log(' Layouts  recursiveAuth   ,   ： ', data, authData);
  return data.map(v => ({
    // hideInMenu: !(v.authKey && authData[v.authKey]
    //   ? authData[v.authKey]?.module
    //   : false),
    hideInMenu: false,
    authInfo: authData[v.authKey] ?? {},
    ...v,
    // routes: recursiveAuth(v.routes, authData[v.authKey]?.sub),
    routes:
      v.routes && v.routes.length > 0
        ? recursiveAuth(v.routes, authData)
        : v.routes,
  }));
};

const routesMap = {
  manager: managerRoutes,
  // manager: [...managerRoutes, ...customerRoutes],
  customer: customerRoutes,
};

const getRoutesMap = (text, dataMap) => {
  const val = dataMap[text];
  return val ? val : [];
};

// const getRoutesAuthMap = (routes, routesAuthMap = []) => {
//   return routes.forEach(v => {
//     [v.authKey]: v.authKey,
//     routes: recursiveAuth(v.routes, authData[v.authKey]?.sub),
//   });
// };

const getRoutes = (props = {}) => {
  const userInfo = getItem('userInfo') ?? {};
  // console.log(' userInfo ： ', userInfo, props); //
  // const routes = isDev
  //   ? [...managerRoutes, ...customerRoutes]
  //   : // ? [...customerRoutes]
  //     getRoutesMap(userInfo.accountType, routesMap);
  const routes = getRoutesMap(userInfo.accountType, routesMap);
  // console.log(
  //   ' getRoutes   userInfo,   ： ',
  //   userInfo,
  //   userInfo.accountType,
  //   routes,
  //   props,
  // );
  const { platform = PLATFORM } = props; //
  // console.log(' platform ： ', platform); //
  // const routesConfig = recursiveAuth(routes, authData);
  const routesConfig = recursiveAuth(routes, flatAuth(props?.perms)).map(v => ({
    ...v,
    hideInMenu: v.cb
      ? v.cb()
      : v.platform
      ? (v.platform && v.platform !== platform) || v.hideInMenu
      : // : false,
        v.hideInMenu,
    hideInMenu: false,
  }));
  const routesData = {
    route: {
      path: '/',
      // routes: routes,
      routes: routesConfig,
    },
    location: {
      pathname: '/',
    },
  };
  return routesData;
};

// const routesData = getRoutes(authData);
// console.log(
//   ' getRoutes(authData) ： ',
//   routesData,
//   recursiveAuth(routesData.route.routes, authData),
//   flatAuth(authData),
// );

const model = {
  namespace,

  state: {
    action: '',
    isShowModal: false,
    dataList: [],
    userInfo,
    authInfo: {},
    accountType: 'customer',
    // getRoutes: getRoutes()[0],
    getRoutes: getRoutes(getItem('userInfo') || authData),
    system: 'OM',
  },

  reducers: {},

  effects: {},
};

export const actions = createAction(model);

export default model;
