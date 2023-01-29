import { init } from '@/utils/createAction';
import * as services from '@/services/admin';

const namespace = 'joinCount';
const { createAction, createDispatch } = init(namespace);

const model = {
  namespace,

  state: {
    searchInfo: {},
    dataList: [],
  },

  reducers: {
    getList(state, { payload, type, res }) {
      console.log(' getList ： ', payload, res);
      return {
        ...state,
        dataList: res.data,
        count: res.total,
        isShowModal: false,
        searchInfo: payload,
      };
    },
  },

  effects: {
    *getListAsync({ payload, type }, { call, put, select }) {
      const { searchInfo } = yield select(state => state[namespace]);
      const params = {
        ...searchInfo,
        ...payload,
      };
      const res = yield call(services.getJoinCountList, params);
      console.log(' getListAsync res ： ', res, payload, searchInfo, params); //
      yield put({
        res,
        type: `getList`,
        payload: params,
      });
    },
  },
};

export const actions = createAction(model);
export const mapStateToProps = state => state[namespace];
export const mapDispatchToProps = createDispatch(model);

export default model;
