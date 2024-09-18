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
  const [state, setState] = useState('all');

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
          onChange={(event) =>
            table.getColumn('detail')?.setFilterValue(event.target.value)
          }
        />

        <div className="flex flex-col justify-center gap-3">
          <Label className="text-alt-green-300" htmlFor="categoria">
            Categoría
          </Label>
          <Select
            value={category}
            onValueChange={(value) => {
              setCategory(value);
              if (value === 'all' || value === 'Todas') {
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
                <SelectLabel>Categoría</SelectLabel>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="build">Build</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <Label className="text-alt-green-300" htmlFor="categoria">
            Estado
          </Label>
          <Select
            value={state}
            onValueChange={(value) => {
              setState(value);
              if (value === 'all') {
                table.getColumn('availability')?.setFilterValue(null);
              } else {
                table.getColumn('availability')?.setFilterValue(value);
              }
            }}
          >
            <SelectTrigger id="categoria" className="w-[180px]">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Estado</SelectLabel>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Disponible">Disponible</SelectItem>
                <SelectItem value="Apartada">Apartada</SelectItem>
                <SelectItem value="Vendida">Vendida</SelectItem>
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
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
