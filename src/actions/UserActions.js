import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  USER_NAME_CHANGED,
  USER_NAME_CREATED,
  USER_NAME_CREATED_SUCCESSFULLY,
  GENDER_UPDATE,
  CREATE_GENDER,
  DIRECT_TO_LOCATION,
  DIRECT_TO_USER_LIST,
  SET_LOCATION_FAIL,
  DIRECT_TO_NEXT,
  SET_LOCATION,
  USER_PROFILE_FETCH_SUCCESS
} from './types';

export const userNameChanged = (text) => {
  return {
    type: USER_NAME_CHANGED,
    payload: text
  };
};

export const userNameCreated = ({ username }) => {
  //console.log(name, phone, shift);
  const { currentUser } = firebase.auth();
  // the below path is not an URL it is the path how our collection (users) will
  //save new employees into the key(userId) key(employees)
  // firebase.database().ref('/users/userId/employees') before key interpolation
  return (dispatch) => {
    dispatch({ type: USER_NAME_CREATED });
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .push({ username })
    .then(user => userNameCreatedSuccessfully(dispatch, user));
  };
  };

export const userNameCreatedSuccessfully = (dispatch, user) => {
  dispatch({
    type: USER_NAME_CREATED_SUCCESSFULLY,
    payload: user
  });
  Actions.setupgender();
};

export const genderUpdate = ({ prop, value }) => {
  return {
    type: GENDER_UPDATE,
    payload: { prop, value }
  };
};

export const createGender = ({ gender }) => {

   const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: CREATE_GENDER });
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .push({ gender })
    .then(user => directToLocation(dispatch, user));
  };
};

export const setLocation = ({ latitude, longitude }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      dispatch({ type: SET_LOCATION });
      firebase.database().ref(`/users/${currentUser.uid}/profile`)
      .push({ latitude, longitude })
      .then(user => directToNext(dispatch, user));
    };

};

export const UserProfileFetch = () => {
  const { currentUser } = firebase.auth();
  //Asynchronous action to fetch data from our firebase database
  // snapshot is an object that describe the datas in there.
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
      .on('value', snapshot => {
        dispatch({ type: USER_PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const directToLocation = (dispatch, user) => {
  dispatch({
    type: DIRECT_TO_LOCATION,
    payload: user
});
Actions.setuplocation();
};

export const directToUserList = (dispatch, user) => {
  dispatch({
    type: DIRECT_TO_USER_LIST,
    payload: user
});
Actions.userlist();
};

const setLocationFail = (dispatch) => {
  dispatch({ type: SET_LOCATION_FAIL });
};

export const directToNext = (dispatch, user) => {
  dispatch({
    type: DIRECT_TO_NEXT,
    payload: user
});
Actions.main();
};
