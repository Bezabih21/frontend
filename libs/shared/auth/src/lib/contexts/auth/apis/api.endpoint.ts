import { environment } from "@eltnt/shared-components";

export const accountEndpoint = {
  login: `${environment.urls.auth_api}/connect/token`,
  register: `${environment.urls.auth_api}/api/account/signup`,
  resetPassword: `${environment.urls.auth_api}/api/account/updateForgotPassword/`,
  forgotPassword: `${environment.urls.auth_api}/api/account/forgotPassword/`,
  activate: `${environment.urls.auth_api}/api/account/activate/`,
  googleLogin: `${environment.urls.auth_api}/api/account/googleLogin`,
};
