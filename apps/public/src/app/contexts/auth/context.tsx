import React, { useContext, useReducer } from 'react';
import { AuthReducer, initializer } from './reducer';
interface AuthContextInterface {
  user: any;
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
  const [user, dispatch] = useReducer(AuthReducer, initializer());

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
