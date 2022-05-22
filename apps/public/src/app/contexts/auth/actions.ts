import { storage } from '../../core/services';
import { loginApi } from './apis/account.api';

export async function loginUser(
  dispatch,
  loginPayload: { email: string; password: string }
) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await loginApi(loginPayload.email, loginPayload.password);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      storage.setItem('accessToken', data?.accessToken);
      storage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  storage.removeItem('currentUser');
  storage.removeItem('token');
}
