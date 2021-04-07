import * as types from '../types';

export const setUserName = () => (dispatch, getState) => {
  const {userDetails : {values : {userName}}} = getState().form
  console.log(" username :", userName)
  dispatch({
    type: types.SET_USER_NAME,
    userName
  })
}