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

const formatPaperCountList = (data, paperTypeList) => {
  console.log(' data, paperTypeList ： ', data, paperTypeList);
  const keyList = Object.keys(data);
  const numList = Object.values(data);
  const list = keyList.map((key, i) => {
    const [abstractNum, paperNum] = numList[i];
    console.log(
      ' abstractNum, paperNum ： ',
      abstractNum,
      paperNum,
      key,
      key,
      paperTypeList,
    );
    return {
      type: paperTypeList.find(v => v.id == key).paperCateName,
      abstractNum,
      paperNum,
    };
  });
  return list;
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
    getPaperCountList(state, { payload, type, res, paperTypeList }) {
      console.log(' getPaperCountList ： ', payload, res);
      return {
        ...state,
        paperCountList: formatPaperCountList(res.data, paperTypeList),
        paperCount: res.total,
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
      console.log(' getListAsync res ： ', res, payload, searchInfo, params);
      yield put({
        res,
        type: `getList`,
        payload: params,
      });
    },
    *getPaperCountListAsync({ payload, type }, { call, put, select }) {
      const { searchInfo } = yield select(state => state[namespace]);
      const params = {
        ...searchInfo,
        ...payload,
      };
      const res = yield call(services.getPaperCountList, params);
      console.log(
        ' getPaperCountListAsync res ： ',
        res,
        payload,
        searchInfo,
        params,
      );
      yield put({
        res,
        type: `getPaperCountList`,
        payload: params,
        paperTypeList: payload,
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
