import { httpService } from '@eltnt/core';
import { User } from '../../../models/user';
import { accountEndpoint } from './api.endpoint';

export const loginApi = (email: string, password: string) => {
  return httpService
    .post(accountEndpoint.login, {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    });
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
