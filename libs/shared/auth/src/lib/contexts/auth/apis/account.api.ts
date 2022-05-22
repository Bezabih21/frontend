import { httpService } from '@eltnt/core';
import { environment } from "@eltnt/shared-components";
import { AxiosRequestConfig } from 'axios';
import { AuthResponse, User } from '../../../models/user';
import { accountEndpoint } from './api.endpoint';

export const loginApi = (
  username: string,
  password: string
): Promise<AuthResponse> => {
  var data = new FormData();
  data.append('grant_type', 'password');
  data.append('username', 'admin');
  data.append('password', 'tempP@ss123');
  data.append('client_id', 'quickapp_spa');
  data.append('client_secret', 'no_password');
  var options: AxiosRequestConfig = {
    method: 'POST',
    url: accountEndpoint.login,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: `grant_type=password&client_secret=${environment.auth.client_secret}&client_id=${environment.auth.client_id}&username=${username}&password=${password}`,
  };
  return httpService.request(options).then((response) => response.data);
};

export const googleLoginApi = (tokenId: string) => {
  return httpService
    .post(`${accountEndpoint.googleLogin}/${tokenId}`)
    .then((response) => {
      return response.data;
    });
};

export const forgotPasswordApi = (email: string) => {
  return httpService
    .put(accountEndpoint.forgotPassword + email)
    .then((response) => {
      return response.data;
    });
};

export const registerApi = (user: User) => {
  return httpService.post(accountEndpoint.register, user);
};

export const resetPasswordApi = (
  userId: string,
  token: string,
  password: string
): any => {
  return httpService
    .put(`${accountEndpoint.resetPassword}${userId}/${token}`, {
      password: password,
    })
    .then((response) => {
      return response.data;
    });
};

export const activateApi = (userId: string, token: string): any => {
  return httpService
    .put(`${accountEndpoint.activate}${userId}/${token}`)
    .then((response) => {
      return response.data;
    });
};
