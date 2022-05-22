import { environment } from "@eltnt/shared-components";

export const accountEndpoint = {
  login: `${environment.urls.auth_api}/account/login`,
  register: `${environment.urls.auth_api}/account/signup`,
  resetPassword: `${environment.urls.auth_api}/account/updateForgotPassword/`,
  forgotPassword: `${environment.urls.auth_api}/account/forgotPassword/`,
  activate: `${environment.urls.auth_api}/account/activate/`,
  googleLogin: `${environment.urls.auth_api}/account/googleLogin`,
};
