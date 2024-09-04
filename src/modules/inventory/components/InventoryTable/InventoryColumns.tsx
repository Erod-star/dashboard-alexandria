import { ColumnDef } from '@tanstack/react-table';

// ? Icons
import { House, MoreHorizontal, Building2, ArrowUpDown } from 'lucide-react';

// ? Components
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components';

// ? Helpers
import { formatToMxn } from '@/helpers';

// TODO: Replace this with the correct type once that Mike provides the real data
export type Property = {
  id: string;
  photos: string[];
  name: string;
  category: 'Premium' | 'Build';
  type: 'Casa' | 'Departamento';
  totalSpace: number;
  totalBuildedSpace: number;
  dateOfRegistration: string;
  commercialValue: number;
  finishValue: number;
  availability: 'Disponible' | 'Apartada' | 'Vendida';
};

export const inventoryColumns: ColumnDef<Property>[] = [
  {
    id: 'photos',
    accessorKey: 'photos',
    header: () => (
      <div className="flex-center">
        <div className="relative">
          <div className="absolute -top-1 text-xl -right-2 rotate-12">📸</div>
          <div className="text-3xl">🏚️</div>
        </div>
      </div>
    ),
    cell: ({ row }) => {
      const property = row.original;

      return (
        <div className="flex-center flex-col gap-2">
          <img
            src={property.photos[0]}
            alt={property.name}
            className="size-20 object-cover rounded-md"
          />
          <div className="flex gap-1">
            <div className="size-6 rounded-md bg-red-200" />
            <div className="size-6 rounded-md bg-red-200" />
            <div className="size-6 rounded-md bg-red-200 text-xs flex-center text-black font-semibold">
              +2
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'detail',
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          className="text-lg"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Detalle de la propiedad
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const property = row.original;

      return (
        <div>
          <p className="font-bold text-2xl mb-1">{property.name}</p>
          <div className="text-base flex items-center gap-1  mb-3 text-alt-green-300">
            {property.type === 'Departamento' ? (
              <Building2 className="size-4" />
            ) : (
              <House className="size-4" />
            )}
            <p> {property.type} </p>
          </div>

          <p className="text-sm font-semibold">
            Registrado el{' '}
            <span className="text-alt-green-300">
              {property.dateOfRegistration}
            </span>
          </p>
        </div>
      );
    },
  },
  {
    id: 'category',
    accessorKey: 'category',
    header: () => <div className="text-center">Categoría</div>,
    cell: ({ row }) => (
      <div className="flex-center">
        <Badge className="bg-alt-green-300 text-alt-green-900">
          {row.getValue('category')}
        </Badge>
      </div>
    ),
  },
  {
    id: 'availability',
    accessorKey: 'availability',
    header: () => <div className="text-center">Estado</div>,
    cell: ({ row }) => {
      switch (row.original.availability) {
        case 'Disponible':
          return (
            <div className="flex-center font-medium">
              <Badge className="" variant="danger">
                {row.getValue('availability')}
              </Badge>
            </div>
          );
        case 'Apartada':
          return (
            <div className="flex-center font-medium">
              <Badge className="font-medium" variant="warning">
                {row.getValue('availability')}
              </Badge>
            </div>
          );
        case 'Vendida':
          return (
            <div className="flex-center font-medium">
              <Badge className="font-medium" variant="success">
                {row.getValue('availability')}
              </Badge>
            </div>
          );
        default:
          return (
            <div className="flex-center font-medium">
              <Badge className="font-medium" variant="success">
                {row.getValue('availability')}
              </Badge>
            </div>
          );
      }
    },
  },
  {
    id: 'commercialValue',
    accessorKey: 'commercialValue',
    header: () => <div className="text-center">Valor comercial</div>,
    cell: ({ row }) => {
      const commercialValue = parseFloat(row.getValue('commercialValue'));
      return (
        <div className="text-center font-medium">
          {formatToMxn(commercialValue)}
        </div>
      );
    },
  },
  {
    id: 'finishValue',
    accessorKey: 'finishValue',
    header: () => <div className="text-center">Valor remate</div>,
    cell: ({ row }) => {
      const finishValue = parseFloat(row.getValue('finishValue'));
      return (
        <div className="text-center font-medium">
          {formatToMxn(finishValue)}
        </div>
      );
    },
  },
  {
    id: 'propertyDimensions',
    header: () => <div className="text-center">Tamaño del terreno</div>,
    cell: ({ row }) => {
      const property = row.original;

      return (
        <div className="flex-center flex-col font-medium text-sm">
          <p>
            Total:{' '}
            <span className="text-alt-green-300">{property.totalSpace}</span> m²
          </p>

          <p>
            Construido:{' '}
            <span className="text-alt-green-300">
              {property.totalBuildedSpace}
            </span>{' '}
            m²
          </p>
        </div>
      );
    },
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
            <DropdownMenuItem>Publicar</DropdownMenuItem>
            <DropdownMenuItem>Eliminar</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Solicitar a marketing</DropdownMenuLabel>
            <DropdownMenuItem>Imagenes</DropdownMenuItem>
            <DropdownMenuItem>Fichas</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];
