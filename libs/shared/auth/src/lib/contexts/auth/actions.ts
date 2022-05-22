import { storage } from '@eltnt/core';
import jwtDecode from 'jwt-decode';
import { DecodedAccessToken } from '../../models/decodedAccessToken';
import { loginApi } from './apis/account.api';
import { AuthReducerTypes } from './reducer';

export async function loginUser(
  dispatch,
  loginPayload: { username: string; password: string }
) {
  try {
    dispatch({ type: AuthReducerTypes.REQUEST_LOGIN });
    let response = await loginApi(loginPayload.username, loginPayload.password);
    let data = jwtDecode<DecodedAccessToken>(response.access_token);

    if (response) {
      dispatch({
        type: AuthReducerTypes.LOGIN_SUCCESS,
        payload: { user: data, token: response.access_token },
      });
      storage.setItem('token', response?.access_token);
      storage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({
      type: AuthReducerTypes.LOGIN_ERROR,
      error: 'Something went Wrong',
    });
    return;
  } catch (error) {
    dispatch({ type: AuthReducerTypes.LOGIN_ERROR, error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: AuthReducerTypes.LOGOUT });
  storage.removeItem('currentUser');
  storage.removeItem('token');
  storage.clear();
}
