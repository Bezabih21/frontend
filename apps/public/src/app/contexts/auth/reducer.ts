import { storage } from '../../core/services';

export const initialState = {
  user: '',
  token: '',
  loading: false,
  errorMessage: null,
};

export const initializer = async (initialValue = initialState) => {
  const localData = await storage.getItem<{}>('currentUser');
  return { ...initialState, ...localData };
};

export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case 'REQUEST_LOGIN':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: payload.user,
        token: payload.auth_token,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: '',
        token: '',
      };

    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
