export interface User {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  jobTitle: string;
  phoneNumber: string;
  configuration: string;
  isEnabled: boolean;
  isLockedOut: boolean;
  roles: string[];
}

export interface AuthResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}
