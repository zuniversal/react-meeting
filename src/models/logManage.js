import { init } from '@/utils/createAction';
import * as services from '@/services/logManage';
import { formatSelectList } from '@/utils';

const namespace = 'logManage';
const { createAction, createDispatch } = init(namespace);

const formatItem = v => {
  return {
    ...v,
  };
};

const model = {
  namespace,

  state: {
    searchInfo: {},
    dataList: [],
    approverList: [],
    extraData: {},
  },

  reducers: {
    showFormModal(state, { payload, type }) {
      console.log(' showFormModal 修改  ： ', state, payload, type);
      return {
        ...state,
        isShowModal: true,
        action: payload.action,
      };
    },
    onCancel(state, { payload, type }) {
      console.log(' onCancel 修改  ： ', state, payload, type);
      return {
        ...state,
        isShowModal: false,
        itemDetail: {},
      };
    },
    getList(state, { payload, type, res }) {
      console.log(' getList ： ', payload, res);
      return {
        ...state,
        dataList: res.data,
        // dataList: res.data.map(formatItem),
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
      const res = yield call(services.getLogManageList, params);
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
