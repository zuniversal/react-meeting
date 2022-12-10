import { init } from '@/utils/createAction';
import * as services from '@/services/newsCenter';

const namespace = 'newsCenter';
const { createAction, createDispatch } = init(namespace);

const model = {
  namespace,

  state: {
    searchInfo: {},
    newsCenterList: [],
    newsCenterList2: [],
    newsDetail: {},
    newsCenterListInfo: {},
  },

  reducers: {
    getNewsCenterList(state, { payload, data, totalResult }) {
      console.log(' getNewsCenterList ： ', state, payload, data);
      return {
        ...state,
        newsCenterList: data,
        newsCenterListInfo: {
          totalResult,
        },
        searchInfo: payload,
      };
    },
    getNewsCenterList2(state, { payload, data }) {
      console.log(' getNewsCenterList2 ： ', state, payload, data);
      return {
        ...state,
        newsCenterList2: data,
      };
    },
    getNewsDetail(state, { payload, data }) {
      console.log(' getNewsDetail ： ', state, payload, data);
      return {
        ...state,
        newsDetail: data,
      };
    },
  },

  effects: {
    *getNewsCenterListAsync({ payload, action, type }, { call, put }) {
      console.log(' getNewsCenterListAsync ： ', payload, action, type);
      const res = yield call(services.getNewsCenterList, payload);
      yield put({
        type: 'getNewsCenterList',
        ...res,
        payload,
      });
    },
    *getNewsCenterListAsync2({ payload, action, type }, { call, put }) {
      console.log(' getNewsCenterListAsync2 ： ', payload, action, type);
      const res = yield call(services.getNewsCenterList, payload);
      yield put({
        type: 'getNewsCenterList2',
        ...res,
        payload,
      });
    },
    *getNewsDetailAsync({ payload, action, type }, { call, put }) {
      console.log(' getNewsDetailAsync ： ', payload, action, type);
      const res = yield call(services.getNewsDetail, payload);
      yield put({
        type: 'getNewsDetail',
        data: res,
        payload,
      });
    },
  },
};

export const actions = createAction(model);
export const mapStateToProps = state => state[namespace];
export const mapDispatchToProps = createDispatch(model);

export default model;
