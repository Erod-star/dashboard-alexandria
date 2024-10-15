/* eslint-disable */
import { useState } from 'react';

import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  SearchInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Label,
  Empty,
} from '@/components';

interface InventoryTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function InventoryTable<TData, TValue>({
  columns,
  data,
}: InventoryTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [category, setCategory] = useState('all');
  const [propertyType, setPropertyType] = useState('all');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex gap-5 items-end pb-4">
        <SearchInput
          className="w-[20rem] bg-alt-gray-600 border-gray-400"
          placeholder="Buscar por nombre..."
          value={(table.getColumn('detail')?.getFilterValue() as string) ?? ''}
          onChange={(event) => {
            setPropertyType('all');
            return table
              .getColumn('detail')
              ?.setFilterValue(event.target.value);
          }}
        />

        <div className="flex flex-col justify-center gap-3">
          <Label className="text-alt-green-300" htmlFor="tipo-de-propiedad">
            Tipo de propiedad
          </Label>
          <Select
            value={propertyType}
            onValueChange={(value) => {
              setPropertyType(value);
              if (value === 'all') {
                table.getColumn('detail')?.setFilterValue(null);
              } else {
                table.getColumn('detail')?.setFilterValue(value);
              }
            }}
          >
            <SelectTrigger id="tipo-de-propiedad" className="w-[180px]">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Casa">Casa</SelectItem>
                <SelectItem value="Departamento">Departamento</SelectItem>
                <SelectItem value="Condominio">Condominio</SelectItem>
                <SelectItem value="Nave industrial">Nave industrial</SelectItem>
                <SelectItem value="Terreno">Terreno</SelectItem>
                <SelectItem value="Local">Local</SelectItem>
                <SelectItem value="Oficina">Oficina</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <Label className="text-alt-green-300" htmlFor="categoria">
            Categoría
          </Label>
          <Select
            value={category}
            onValueChange={(value) => {
              setCategory(value);
              if (value === 'all') {
                table.getColumn('category')?.setFilterValue(null);
              } else {
                table.getColumn('category')?.setFilterValue(value);
              }
            }}
          >
            <SelectTrigger id="categoria" className="w-[180px]">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Todas</SelectItem>

                <SelectLabel>Premium</SelectLabel>
                <SelectItem value="Cobranza">Cobranza</SelectItem>
                <SelectItem value="Juicio">Juicio</SelectItem>
                <SelectItem value="Sentencia">Sentencia</SelectItem>
                <SelectItem value="Adjudicadas">Adjudicadas</SelectItem>

                <SelectLabel>Classic</SelectLabel>
                <SelectItem value="Altaltium">Altaltium</SelectItem>
                <SelectItem value="Preventa">Preventa</SelectItem>
                <SelectItem value="Consignación">Consignación</SelectItem>
                <SelectItem value="Banco">Banco</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-alt-green-900 bg-alt-gray-600">
        <Table className="border-b-8 border-alt-green-900">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => {
                    const cellId = cell.column.columnDef.id;
                    return (
                      <TableCell
                        key={cell.id}
                        className={cellId === 'actions' ? 'p-0 px-4' : ''}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24">
                  <Empty />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-end space-x-2 py-4 mr-4">
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </>
  );
}
