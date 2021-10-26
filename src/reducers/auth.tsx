import * as CONST from '../constants/authActionTypes';
import { AuthActionType } from '../types/authActionType';
import { AuthState } from '../types/authState';

const AuthReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case CONST.SET_TOKEN:
      console.log('AuthReducer: action', action, 'state', state);
      /* eslint-disable camelcase */
      const { access_token, refresh_token, token_type, expires_in } = action.payload.attributes;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('token_type', token_type);
      localStorage.setItem('expires_in', expires_in.toString());
      /* eslint-enable camelcase */

      return { ...state, isAuthenticated: true };

    default:
      return state;
  }
};

export default AuthReducer;
