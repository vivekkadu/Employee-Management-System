import { EMPLOYEES_FETCH_SUCESS } from '../actions/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
  case EMPLOYEES_FETCH_SUCESS:
    return action.payload;
  default:
   return state;
}
};
