import { init, action } from '@/utils/createAction';
import * as templateServices from '@/services/template';
import * as services from '@/services/user';
import { setItem, getItem, tips } from '@/utils';
import moment from 'moment';

const namespace = 'common';
const { createActions } = init(namespace, true);

const otherActions = [
  // 'getEnumListAsync',
  // 'powerStationAsync',
  // 'clientAsync',
  // 'houseNoAsync',
  // 'powerStationDetailAsync',
  // 'houseNoDetailAsync',
  // 'clientDetailAsync',
  'showItemAsync',
];

const batchTurnActions = ['showCommonModal', 'closeCommonModal'];

// export const commonActions = transferActions(otherActions,)
export const commonActions = {
  ...createActions(otherActions, batchTurnActions),
};

const serviceConfigMap = {
  templateServices,
};

const removeParams = (params, keys = []) => {
  console.log(' removeParams   ,   ： ');
  keys.forEach((v, i) => {
    delete params[v];
  });
};

const getService = params => {
  const {
    action,
    dettailSuffix = 'DetailAsync',
    serviceSuffix = 'Services',
    serviceKey,
  } = params;
  // const dettailSuffix = 'DetailAsync';
  // const serviceSuffix = 'Services';
  const actionSlice = action.split(dettailSuffix)[0];
  const serviceStr =
    serviceKey || action.split(dettailSuffix)[0] + serviceSuffix;
  console.log(
    ' getService   action,   ： ',
    params,
    action,
    actionSlice,
    serviceStr,
    serviceConfigMap,
    serviceConfigMap[serviceStr],
  );
  removeParams(params, ['dettailSuffix', 'serviceSuffix', 'serviceKey']);
  return serviceConfigMap[serviceStr];
};

// console.log(' actions ： ', actions,  )//
export const mapStateToProps = state => state[namespace];

const model = {
  namespace,

  state: {
    action: '',
    isShowCommonModal: false,
    itemDetail: {},
    commonModalContent: null,
    extraData: {},
  },

  reducers: {
    showCommonModal(state, { payload, type }) {
      console.log(' showCommonModal 修改  ： ', state, payload, type);
      return {
        ...state,
        isShowCommonModal: true,
        action: payload.action,
        commonModalContent: payload.content,
      };
    },
    closeCommonModal(state, { payload, type }) {
      console.log(' closeCommonModal 修改  ： ', state, payload, type);
      return {
        ...state,
        isShowCommonModal: false,
        itemDetail: {},
        commonModalContent: null,
      };
    },
    templateDetail(state, { payload }) {
      console.log(' templateDetail ： ', state, payload);
      return {
        ...state,
        action: payload.payload.action,
        isShowCommonModal: true,
        itemDetail: {
          ...payload.bean,
        },
      };
    },
  },

  effects: {
    *showItemAsync({ payload = {}, action, type }, { call, put }) {
      console.log(' showItemAsync service 1： ', payload);
      // const service = getService(payload.action);
      const service = getService(payload);
      console.log(' showItemAsync service ： ', service, payload);
      // if (!payload.action || !service) {
      if (!payload.action) {
        tips('请传入对应详情的action参数！', 2);
        return;
      }
      // const res = !payload.noReq ? yield call(service.getItem, payload) : {};
      // console.log(' showItemAsync service ： ', res, payload);
      let extraReqData;
      // if (payload.extraReq) {
      //   extraReqData = yield call(
      //     service[payload.extraReq.url],
      //     payload.extraReq.params,
      //   );
      // }

      yield put({
        type: `${payload.action.split('Async')[0]}`,
        payload: {
          // ...res,
          payload,
          extraReqData,
        },
      });
    },
    *loginAsync({ payload, action, type }, { call, put }) {
      console.log(' loginAsync ： ');
      const res = yield call(services.login, payload);
      console.log(' loginAsync ： ', res, payload, action);
      setItem('token', res.token, true);
      const resData = yield call(services.getUserInfo);
      const userInfo = {
        ...resData,
      };
      setItem('userInfo', userInfo);
      console.log(' userInfo2 ： ', userInfo);
      yield put({
        type: 'login',
        payload: userInfo,
      });
      history.push(path);
    },
  },
  subscriptions: {
    setup: props => {
      const { dispatch } = props;
      // const getUserMsg = params => {
      //   const userInfo = getItem('userInfo');
      //   if (userInfo?.id) {
      //     dispatch({
      //       type: 'getUserMsgAsync',
      //       payload: {
      //         user_id: userInfo.id,
      //       },
      //     });
      //   }
      // };
      // getUserMsg();
    },
  },
};

export default model;
