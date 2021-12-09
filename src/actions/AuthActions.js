import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { EMAIL_CHANGED,
          PASSWORD_CHANGED,
          CONFIRM_PASSWORD_CHANGED,
          DIRECT_TO_SIGN_UP,
          LOGIN_USER_SUCCESS,
          LOGIN_USER_FAIL,
          LOGIN_USER,
          RESET_CACHES,
          SIGN_UP_USER,
          SIGN_UP_USER_SUCCESS,
          SIGN_UP_USER_FAIL
        } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const directToSignUp = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: DIRECT_TO_SIGN_UP });
    Actions.signup();
  };

};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => loginUserSuccess(dispatch, user))
  .catch(() => loginUserFail(dispatch));
};
};

export const signUpUser = ({ email, password, confirmPassword }) => {
  return (dispatch) => {
    dispatch({type: SIGN_UP_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => signUpUserSuccess(dispatch, user));
    //.catch((error) => signUpUserFail(dispatch));
};
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const signUpUserFail = (dispatch) => {
  dispatch({ type: SIGN_UP_USER_FAIL });
};

const resetCaches = (dispatch) => {
  dispatch({ type: RESET_CACHE });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.setupname();
};

const signUpUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGN_UP_USER_SUCCESS,
    payload: user
  });
  Alert.alert(
    'Alert',
    'User has been succesfully created. Please login !',
  [
    {text: 'OK', onPress: () => console.log('OK')}
  ],
  {cancelable: false}
);
  Actions.auth();
};
