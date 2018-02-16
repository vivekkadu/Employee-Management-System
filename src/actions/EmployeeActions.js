import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCESS,
  EMPLOYEE_SAVE_SUCESS } from './type';
//we create only one action to get update of name,phone and shift in employeeForm

export const employeeUpdate = ({ prop, value }) => {
return {
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }

};
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
 .push({ name, phone, shift })
 .then(() => {
     dispatch({ type: EMPLOYEE_CREATE });
     Actions.main({ type: 'reset' });
 });
 console.ignoredYellowBox = ['Setting a timer'];
};
};

export const employeeFetch = () => {
const { currentUser } = firebase.auth();
return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
   .on('value', snapshot => {
     dispatch({ type: EMPLOYEES_FETCH_SUCESS, payload: snapshot.val() });
   });
};
};
//this actioncreator is update data of emplyee in firebase
export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
     .set({ name, phone, shift })
     .then(() => {
       dispatch({ type: EMPLOYEE_SAVE_SUCESS });
       Actions.main({ type: 'reset' });
     });
   };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
     firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.main({ type: 'reset' });
      });
  };
};
