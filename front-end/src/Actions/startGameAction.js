import * as types from '../types';
import state from '../localState';

const {makeCard} = state

export const startGame = () => dispatch => {
  dispatch({ type: types.START_GAME, payload: makeCard() });
};
