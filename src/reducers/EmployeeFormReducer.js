import {
EMPLOYEE_UPDATE,
EMPLOYEE_CREATE,
EMPLOYEE_SAVE_SUCESS
} from '../actions/type';

const INITIAL_STATE = {
   name: '',
   phone: '',
   //by default shift is at Monday if user does not select any value
   shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === {prop:'name', value:'jane'}
      //if call actioncretor prop as then it will be as name name:jane
      return { ...state, [action.payload.prop]: [action.payload.value] };
    case EMPLOYEE_CREATE:
       return INITIAL_STATE;
       //EMPLOYEE_SAVE_SUCESS is reset all the attribute in form 
    case EMPLOYEE_SAVE_SUCESS:
       return INITIAL_STATE;
    default:
      return state;
  }
};
