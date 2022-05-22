import { storage } from '@eltnt/core';
import { DecodedAccessToken } from '../../models/decodedAccessToken';
import { AuthContextInterface } from './context';

export const initialState: AuthContextInterface = {
  user: null,
  token: null,
  loading: false,
  errorMessage: null,
};

export enum AuthReducerTypes {
  REQUEST_LOGIN = 'REQUEST_LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGOUT = 'LOGOUT',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

export const initializer = async (
  initialValue = initialState
): Promise<AuthContextInterface> => {
  const localData = await storage.getItem<string>('currentUser');
  const token = (await storage.getItem<string>('token')) ?? '';
  const decodedAccessToken = localData
    ? (JSON.parse(localData) as DecodedAccessToken)
    : null;
  return { ...initialState, token, user: decodedAccessToken };
};

export const AuthReducer = (state: AuthContextInterface, { type, payload }) => {
  switch (type) {
    case AuthReducerTypes.REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case AuthReducerTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        loading: false,
      };
    case AuthReducerTypes.LOGOUT:
      return {
        ...state,
        user: '',
        token: '',
      };

    case AuthReducerTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
