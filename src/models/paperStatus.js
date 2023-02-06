import { init } from '@/utils/createAction';
import * as services from '@/services/postPaper';

const formatItem = v => {
  return {
    ...v,
    type: v.paperCate,
    status: v.sumResult,
    time: v.submitTime,
  };
};

const namespace = 'paperStatus';
const { createAction, createDispatch } = init(namespace);

const model = {
  namespace,

  state: {
    searchInfo: {},
    dataList: [],
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
    removeItem(state, { payload, type }) {
      const removeList = payload.payload.filter(v => v.id);
      return {
        ...state,
        dataList: state.dataList.filter(v =>
          removeList.some(item => v.id === item),
        ),
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
    *getItemAsync({ payload, type }, { call, put }) {
      const res = yield call(services.getItem, payload);
      yield put({
        res,
        type: `getItem`,
        payload,
      });
    },
    *addItemAsync({ payload, type }, { call, put }) {
      const res = yield call(services.addPaper, payload);
      yield put({
        type: 'getListAsync',
      });
      return res;
    },
    *editItemAsync({ payload, type }, { call, put }) {
      const res = yield call(services.editItem, payload);
      yield put({
        res,
        type: `editItem`,
        payload,
      });
    },
    *removeItemAsync({ payload, type }, { call, put }) {
      const res = yield call(services.removePaper, payload);
      console.log(' removeItemAsync ： '); //
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
