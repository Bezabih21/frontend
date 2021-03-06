export interface DecodedAccessToken {
  nbf: number;
  exp: number;
  iss: string;
  aud: string;
  client_id: string;
  sub: string;
  auth_time: number;
  idp: string;
  role: string;
  permission: string[];
  name: string;
  email: string;
  phone_number: string;
  fullname: string;
  jti: string;
  iat: number;
  scope: string[];
  amr: string[];
}
