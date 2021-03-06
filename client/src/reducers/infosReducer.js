import {
    INFOS_USER,
    INFOS_USER_SUCCESS,
    INFOS_USER_ERROR,
    INFOS_USER_ERROR_FIELD,
} from "../actions/infosAction";

import { CLEAR_USER_INFORMATION } from '../actions/logoutAction'

import {
  RESET_STATE
} from '../actions/resetStateAction';

const DEFAULT_STATE = {
  status: 'offline',
  error: null
};
  
export default function log(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case INFOS_USER:
        return{
          status: 'loading',
          error:null
        }
      case INFOS_USER_SUCCESS:

        return {
          status:'online',
          error: null
        }
      case INFOS_USER_ERROR:
        return {
          status: 'error',
          error: action.error,
        }
      case INFOS_USER_ERROR_FIELD:
        return {
          status: 'errorField',
          error: action.errorField,
        }
      case CLEAR_USER_INFORMATION:
        return DEFAULT_STATE
      case RESET_STATE:
        return 'initial state';
      default:
        return state;
    }
}