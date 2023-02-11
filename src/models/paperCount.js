import { init } from '@/utils/createAction';
import * as services from '@/services/postPaper';
import { downLoad } from '@/utils';

const formatItem = v => {
  return {
    ...v,
    type: v.paperCate,
    status: v.sumResult,
    time: v.submitTime,
  };
};

const namespace = 'paperCount';
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
        dataList: res.data.map(formatItem),
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
      const res = yield call(services.getPaperList, params);
      console.log(' getListAsync res ： ', res, payload, searchInfo, params); //
      yield put({
        res,
        type: `getList`,
        payload: params,
      });
    },
    *batchDownPaper({ payload, type }, { call, put }) {
      const res = yield call(services.batchDownPaper, payload);
      downLoad(res.data, { name: res.data });
      return res;
    },
  },
};

export const actions = createAction(model);
export const mapStateToProps = state => state[namespace];
export const mapDispatchToProps = createDispatch(model);

export default model;
