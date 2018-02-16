import {
 EMAIL_CHANGED,
 PASSWORD_CHANGED,
 LOGIN_USER_SUCESS,
 LOGIN_USER_FAIL,
 LOGIN_USER
 } from '../actions/type';

const INTIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INTIAL_STATE, action) => {
console.log(action);
switch (action.type) {
  case EMAIL_CHANGED :
    return { ...state, email: action.payload };
  case PASSWORD_CHANGED :
    return { ...state, password: action.payload };
  case LOGIN_USER :
    return { ...state, loading: true, error: '' };
  case LOGIN_USER_SUCESS :
    return { ...state, ...INTIAL_STATE, user: action.payload };
  case LOGIN_USER_FAIL:
    return { ...state, password: '', error: 'Email/Password is incorrect', loading: false };
  default:
    return state;
}
};
