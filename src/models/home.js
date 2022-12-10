import { init } from '@/utils/createAction';
import * as services from '@/services/home';

const namespace = 'home';
const { createAction, createDispatch } = init(namespace);

const model = {
  namespace,

  state: {
  },

  reducers: {
  },

  effects: {
  },
};

export const actions = createAction(model);
// export const mapStateToProps = state => state[namespace];
export const mapStateToProps = state => ({
  ...state[namespace],
  loading: state.loading,
});
export const mapDispatchToProps = createDispatch(model);

export default model;
