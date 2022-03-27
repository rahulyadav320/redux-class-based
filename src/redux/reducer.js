import { TYPES } from './types';

export const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case TYPES.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
