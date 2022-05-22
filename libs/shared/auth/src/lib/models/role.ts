export interface Permission {
  name: string;
  value: string;
  groupName: string;
  description: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  usersCount: number;
  permissions: Permission[];
}
