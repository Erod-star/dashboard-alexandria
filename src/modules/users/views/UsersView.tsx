// ? Components
import { Button } from '@/components';
import { usersColumns, UsersTable } from '../components';

import { User } from '../interfaces';

function UsersView() {
  const users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      profilePicture: 'https://github.com/shadcn.png',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      department: 'Vendedor',
    },
    {
      id: '2',
      name: 'Jane Smith',
      profilePicture: 'https://github.com/shadcn.png',
      email: 'jane.smith@example.com',
      role: 'User',
      status: 'Inactive',
      department: 'Jurídico',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      profilePicture: 'https://github.com/shadcn.png',
      email: 'alice.johnson@example.com',
      role: 'User',
      status: 'Active',
      department: 'Marketing',
    },
    {
      id: '4',
      name: 'Bob Williams',
      profilePicture: 'https://github.com/shadcn.png',
      email: 'bob.williams@example.com',
      role: 'Moderator',
      status: 'Pending',
      department: 'Gerencia',
    },
    {
      id: '5',
      name: 'Bob Williams',
      profilePicture: 'https://github.com/shadcn.png',
      email: 'bob.williams@example.com',
      role: 'Moderator',
      status: 'Pending',
      department: 'Administración',
    },
  ];

  return (
    <div className="h-full">
      <section className="mb-5 flex justify-between">
        <h2 className="text-4xl font-bold">Usuarios</h2>

        <Button className="text-base font-semibold">+ Usuario</Button>
      </section>

      <div className="pb-6">
        <UsersTable columns={usersColumns} data={users} />
      </div>
    </div>
  );
}

export default UsersView;
