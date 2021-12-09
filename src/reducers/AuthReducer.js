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
      } from '../actions/types';

const INITIAL_STATE = { email: '',
                        password: '',
                        confirmPassword: '',
                        user: null,
                        error: '',
                        loading: false
                      };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case DIRECT_TO_SIGN_UP:
      return { ...state, ...INITIAL_STATE };

    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };

    case SIGN_UP_USER:
      return { ...state, loading: false, error: '' };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

   case RESET_CACHES:
      return { ...state, ...INITIAL_STATE };

    case SIGN_UP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', password: '', loading: false };

    case SIGN_UP_USER_FAIL:
      return { ...state, error: 'Creation Failed', password: '', confirmPassword: '', loading: false };

    default:
    return state;
  }
};
