import React, { useContext, useEffect, useReducer } from 'react';
import { DecodedAccessToken } from '../../models/decodedAccessToken';
import { AuthReducer, AuthReducerTypes, initializer } from './reducer';

export interface AuthContextInterface {
  user: DecodedAccessToken;
  token: string;
  loading: boolean;
  errorMessage: any;
}
export const AuthStateContext = React.createContext<AuthContextInterface>(null);
export const AuthDispatchContext = React.createContext(null);

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, {
    user: null,
    loading: true,
    token: null,
    errorMessage: null,
  });

  const getLoginState = async () => {
    const data = await initializer();
    dispatch({ type: AuthReducerTypes.LOGIN_SUCCESS, payload: { ...data } });
  };

  useEffect(() => {
    getLoginState();
  }, []);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
