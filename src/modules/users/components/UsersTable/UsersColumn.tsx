import { ColumnDef } from '@tanstack/react-table';
import { toast } from 'sonner';

// ? Icons
import { Mail, MoreHorizontal, Phone } from 'lucide-react';

// ? Components
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components';

import {
  UserDepartmentBadge,
  Rewards,
  Rating,
} from '@/modules/users/components';

// ? Types
import type { User } from '@/modules/users/interfaces';

export const usersColumns: ColumnDef<User>[] = [
  {
    id: 'profilePicture',
    accessorKey: 'profilePicture',
    header: '',
    cell: ({ row }) => (
      <div className="flex-center max-w-24">
        <img
          src={row.original.profilePicture}
          alt={row.original.name}
          className="rounded-full size-20 border-2 border-primary shadow-sm"
        />
      </div>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Nombre',
    cell: ({ row }) => {
      const { name, email } = row.original;
      return (
        <>
          <p className="font-semibold text-2xl">{name}</p>

          <div className="mt-1">
            <Button
              className="flex items-center gap-2 mt-2 text-alt-green-300 px-2 py-0"
              size="sm"
              variant="ghost"
              onClick={() => {
                navigator.clipboard.writeText(email);
                toast.info('Correo copiado en el portapapeles', {
                  duration: 1500,
                });
              }}
            >
              <Mail className="size-3 inline-block" />
              <span className="text-sm">{email}</span>
            </Button>

            <Button
              className="flex items-center gap-2 text-white px-2 py-0"
              size="sm"
              variant="ghost"
              onClick={() => {
                navigator.clipboard.writeText('312 133 5555');
                toast.info('Telefono copiado en el portapapeles', {
                  duration: 1500,
                });
              }}
            >
              <Phone className="size-3 inline-block" />
              <span className="text-sm">312 133 5555</span>
            </Button>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: 'department',
    header: 'Departamento',
    cell: ({ row }) => (
      <UserDepartmentBadge department={row.getValue('department')} />
    ),
  },
  {
    id: 'rewards',
    header: 'Recompensas',
    cell: () => <Rewards />,
  },
  {
    id: 'rating',
    header: 'Calificación',
    cell: () => <Rating />,
  },
  {
    id: 'actions',
    cell: () => (
      <div className="max-w-[30px] px-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Mensaje directo</DropdownMenuItem>
            <DropdownMenuItem>Eliminar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];
