import * as types from '../types';

export const setUserName = (userName, dispatch) => {
  dispatch({
    type: types.SET_USER_NAME,
    userName
  })
}