import { init } from '@/utils/createAction';
import * as services from '@/services/payReview';
import { calledConfigMap } from '@/configs';

const formatItem = v => {
  return {
    ...v,
    isPayMap: v.isPay ? '是' : '否',
    identityMap: calledConfigMap[v.title],
  };
};

const namespace = 'payReview';
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
        dataList: res.data?.map(formatItem),
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
      const res = yield call(services.getPayReviewList, params);
      console.log(' getListAsync res ： ', res, payload, searchInfo, params); //
      yield put({
        res,
        type: `getList`,
        payload: params,
      });
    },
    *editItemAsync({ payload, type }, { call, put }) {
      const res = yield call(services.editPayReview, payload);
    },
  },
};

export const actions = createAction(model);
export const mapStateToProps = state => state[namespace];
export const mapDispatchToProps = createDispatch(model);

export default model;
