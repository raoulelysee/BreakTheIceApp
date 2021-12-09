import { USER_NAME_CHANGED,
          USER_NAME_CREATED,
          USER_NAME_CREATED_SUCCESSFULLY,
          GENDER_UPDATE,
          CREATE_GENDER,
          DIRECT_TO_LOCATION,
          DIRECT_TO_NEXT,
          DIRECT_TO_USER_LIST,
          SET_LOCATION,
          SET_LOCATION_FAIL
        } from '../actions/types';

const INITIAL_STATE = {
  username: '',
  loading: false,
  gender: '',
  latitude:'',
  longitude:'',
  error:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

      case USER_NAME_CHANGED:
        return { ...state, username: action.payload };

      case USER_NAME_CREATED:
        return {...state, loading: true};

      case USER_NAME_CREATED_SUCCESSFULLY:
        return {...state, ...INITIAL_STATE, user: action.payload};

      case GENDER_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };

      case CREATE_GENDER:
        return {...state, loading: true};

      case DIRECT_TO_LOCATION:
        return { ...state, ...INITIAL_STATE };

      case DIRECT_TO_NEXT:
        return { ...state, ...INITIAL_STATE };
        
        case DIRECT_TO_USER_LIST:
        return {...state, ...INITIAL_STATE};

      case SET_LOCATION:
        return { ...state, ...INITIAL_STATE, latitude: action.payload, longitude: action.payload};

      case SET_LOCATION_FAIL:
        return { ...state, error: 'Permission to access location was denied', latitude: '', longitude: '', loading: 'false' }

      default:
        return state;
    }
};
