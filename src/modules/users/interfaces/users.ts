export interface User {
  id: string;
  name: string;
  profilePicture: string;
  email: string;
  role: string;
  status: string;
  department: Department;
}

export type Department =
  | 'Vendedor'
  | 'Jurídico'
  | 'Marketing'
  | 'Gerencia'
  | 'Administración';
