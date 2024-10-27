"use client";

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { Table } from "@/components/ui/table";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "./table/header";
import Body from "./table/body";
import { TablePropsTypes } from "@/lib/type";
import Search from "./table/search";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnFilters,
      globalFilter,
    },
  });

  return (
    <>
      {/* search */}
      <Search globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <ScrollArea className="h-[70vh] border-b">
        <Table>
          {/* header */}
          <Header table={table} />

          {/* body */}
          <Body table={table} columns={columns as TablePropsTypes[]} />
        </Table>
      </ScrollArea>
    </>
  );
}
