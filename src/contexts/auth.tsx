import React, { createContext, useReducer, Dispatch } from 'react';

import AuthReducer from '../reducers/auth';
import { AuthActionType } from '../types/authActionType';
import { AuthState } from '../types/authState';

const initialState: AuthState = {
  isAuthenticated: false
};

const initialContext = {
  state: initialState,
  dispatch: () => null
};

const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthActionType>;
}>(initialContext);

const AuthContextProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
