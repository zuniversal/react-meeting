import { init } from '@/utils/createAction';
import * as services from '@/services/paperApprove';
import * as paperApproveServices from '@/services/paperApprove';
import { downLoad } from '@/utils';

const formatItem = v => {
  return {
    ...v,
    type: v.paperCateID,
    status: v.sumResult,
    time: v.submitTime,
  };
};

const namespace = 'paperApprove';
const { createAction, createDispatch } = init(namespace);

const model = {
  namespace,

  state: {
    searchInfo: {},
    dataList: [],
    paperApproverList: [],
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
    removeItem(state, { payload, type }) {
      const removeList = payload.payload.filter(v => v.id);
      return {
        ...state,
        dataList: state.dataList.filter(v =>
          removeList.some(item => v.id === item),
        ),
      };
    },
    getPaperApproverListAsync(state, { payload, type, res }) {
      console.log(' getPaperApproverListAsync ： ', payload, res);
      return {
        ...state,
        dataList: res.data,
        count: res.total,
        isShowModal: false,
      };
    },
    editPaperApprover(state, { payload, type }) {
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
      const res = yield call(services.getPaperApproveList, params);
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
        res,
        type: `addItem`,
        payload,
      });
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
      yield put({
        res,
        type: `removeItem`,
        payload,
      });
    },
    *getPaperApproverListAsync({ payload, type }, { call, put }) {
      const res = yield call(services.getPaperApproverList, payload);
      console.log(' getPaperApproverListAsync res ： ', res); //
      yield put({
        res,
        type: `getPaperApproverList`,
        payload,
      });
    },
    *editPaperApproverAsync({ payload, type }, { call, put }) {
      const res = yield call(services.editPaperApprover, payload);
      // yield put({
      //   res,
      //   type: `editPaperApprover`,
      //   payload,
      // });
    },
    *paperApproverAsync({ payload, type }, { call, put }) {
      const res = yield call(services.paperApprover, payload);
      yield put({
        type: 'getListAsync',
      });
      return res;
    },
    *batchDownPaper({ payload, type }, { call, put }) {
      const res = yield call(services.batchDownPaper, payload);
      downLoad(res.data, { name: res.data });
    },
  },
};

export const actions = createAction(model);
export const mapStateToProps = state => state[namespace];
export const mapDispatchToProps = createDispatch(model);

export default model;
