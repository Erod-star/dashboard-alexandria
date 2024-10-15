import { ColumnDef } from '@tanstack/react-table';

// ? Icons
import { House, MoreHorizontal, Building2, ArrowUpDown } from 'lucide-react';

// ? Components
import { HandleImages } from '../HandleImages';
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

// ? Types
import { Inventory } from '../../types';

export const inventoryColumns: ColumnDef<Inventory>[] = [
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
      // TODO: Arreglar esto una vez que se tenga la estructura correcta
      const imgs = property.fotosUrls || '';
      return <HandleImages images={[imgs]} />;
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
          <p className="font-bold text-xl mb-1">{property.calleYNumero}</p>
          <div className="text-base flex items-center gap-1  mb-3 text-alt-green-300">
            {property.tipoPropiedad === 'Departamento' ? (
              <Building2 className="size-4" />
            ) : (
              <House className="size-4" />
            )}
            <p> {property.tipoPropiedad} </p>
          </div>

          {/* // TODO: All hacer click debera copiar el link del google maps si existe */}
          <p className="text-sm font-semibold text-gray-300">
            {property.colonia}, {property.municipio}, {property.estado}, #
            {property.cp}
          </p>
        </div>
      );
    },
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: () => <div className="text-center">Detalle</div>,
    cell: ({ row }) => {
      const property = row.original;
      return (
        <div className="flex-center">
          <ul>
            <li>Recamaras</li>
            <li>Sanitarios</li>
            <li>Estacionamientos</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: 'category',
    accessorKey: 'category',
    header: () => <div className="text-center">Categoría</div>,
    cell: ({ row }) => {
      const property = row.original;
      return (
        <div className="flex-center">
          <Badge className="bg-alt-green-300 text-alt-green-900">
            {property.etapa}
          </Badge>
        </div>
      );
    },
  },
  {
    id: 'availability',
    accessorKey: 'availability',
    header: () => <div className="text-center">Lista</div>,
    cell: ({ row }) => {
      const property = row.original;
      return <div className="flex-center">{property.lista}</div>;
    },
  },
  {
    id: 'commercialValue',
    accessorKey: 'commercialValue',
    header: () => <div className="text-center">Valor comercial</div>,
    cell: ({ row }) => {
      const property = row.original;
      const firstPayment = property.primerPago || 0;
      const secondPayment = property.segundoPago || 0;
      // TODO: Solo las propiedades classic tienen un unico pago, las demas tienen 2 a buebo
      return (
        <div className="text-center">
          <p className="flex">
            Primer pago:{' '}
            <span className="text-alt-green-300">
              {formatToMxn(firstPayment)}
            </span>
          </p>

          <p className="flex">
            Segundo pago:{' '}
            <span className="text-alt-green-300">
              {formatToMxn(secondPayment)}
            </span>
          </p>
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
        <div className="flex justify-start flex-col font-medium text-sm">
          <p>
            Total:{' '}
            <span className="text-alt-green-300">{property.terreno}</span> m²
          </p>
          <p>
            Contruido:{' '}
            <span className="text-alt-green-300">{property.construccion}</span>{' '}
            m²
          </p>
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: () => <div className="flex-center">Acciones</div>,
    cell: () => (
      <div className="px-2 flex-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0">
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
