import { useState } from 'react';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

// ? Components
import {
  Button,
  Empty,
  Label,
  SearchInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components';

interface UsersTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function UsersTable<TData, TValue>({
  columns,
  data,
}: UsersTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [department, setDepartment] = useState('all');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
            console.log('::table', table.getColumn('detail')?.getFilterValue());
            return table
              .getColumn('detail')
              ?.setFilterValue(event.target.value);
          }}
        />

        <div className="flex flex-col justify-center gap-3">
          <Label className="text-alt-green-300" htmlFor="departamento">
            Departamento
          </Label>
          <Select
            value={department}
            onValueChange={(value) => {
              setDepartment(value);
              if (value === 'all') {
                table.getColumn('department')?.setFilterValue(null);
              } else {
                table.getColumn('department')?.setFilterValue(value);
              }
            }}
          >
            <SelectTrigger id="departamento" className="w-[180px]">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Vendedor">Vendedor</SelectItem>
                <SelectItem value="Jurídico">Jurídico</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Gerencia">Gerencia</SelectItem>
                <SelectItem value="Administración">Administración</SelectItem>
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
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="min-w-24">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <Empty/>
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
