import { init } from '@/utils/createAction';
import * as services from '@/services/registerApprover';
import { formatSelectList } from '@/utils';

const namespace = 'registerApprover';
const { createAction, createDispatch } = init(namespace);

const formatItem = v => {
  return {
    ...v,
  };
};

const formatRemoveData = v => {
  const { removeTitle, removeContent, okText, cancelText, ...rest } = v;
  return rest;
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
        dataList: res.data.map(formatItem),
        count: res.total,
        isShowModal: false,
        searchInfo: payload,
      };
    },
    getItem(state, { payload, type }) {
      console.log(' getItemgetItem ： ', payload);
      return {
        ...state,
        action: payload.payload.action,
        isShowModal: true,
        d_id: payload.payload.d_id,
        itemDetail: payload.bean,
      };
    },
    addItem(state, { payload, type }) {
      return {
        ...state,
        dataList: [payload.bean, ...state.dataList],
        isShowModal: false,
        count: state.count + 1,
      };
    },
    editItem(state, { payload, type }) {
      return {
        ...state,
        dataList: state.dataList.map(v => ({
          ...(v.id !== payload.payload.d_id ? payload : v),
        })),
        isShowModal: false,
      };
    },
    setExtraData(state, { payload, type }) {
      console.log(' setExtraData ： ', payload); //
      return {
        ...state,
        extraData: payload.record,
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
      const res = yield call(services.getRegesterApproveList, params);
      console.log(' getListAsync res ： ', res, payload, searchInfo, params); //
      yield put({
        res,
        type: `getList`,
        payload: params,
      });
    },
    *getItemAsync({ payload, type }, { call, put }) {
      const res = yield call(services.getItem, payload);
      yield put({
        res,
        type: `getItem`,
        payload,
      });
    },
    *addItemAsync({ payload, type }, { call, put }) {
      const res = yield call(services.addRegesterApprove, payload);
      yield put({
        type: 'getListAsync',
      });
      return res;
    },
    *editItemAsync({ payload, type }, { call, put }) {
      const res = yield call(services.editRegesterApprove, payload);
      yield put({
        type: 'getListAsync',
      });
      return res;
    },
    *removeItemAsync({ payload, type }, { call, put }) {
      const formatParams = formatRemoveData(payload);
      const res = yield call(services.removeRegesterApprove, formatParams);
      yield put({
        type: 'getListAsync',
      });
    },
  },
};

export const actions = createAction(model);
export const mapStateToProps = state => state[namespace];
export const mapDispatchToProps = createDispatch(model);

export default model;
