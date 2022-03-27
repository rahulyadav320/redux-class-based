import { TYPES } from './types';

export const increament = () => {
  return {
    type: TYPES.INCREMENT,
    payload: { name: 'raa' },
  };
};

export const decrement = (dispatch) => {
  return {
    type: TYPES.DECREMENT,
    payload: { name: 'daa' },
  };
};
