export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  password?: string;
  isBlocked?: boolean;
  isActive?: boolean;
  roles?: string[];
  profilePicture?: string;
}
