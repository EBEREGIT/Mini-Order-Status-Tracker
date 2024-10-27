"use client";

import { TablePropsTypes } from "@/lib/type";
import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";

export const columns: ColumnDef<TablePropsTypes>[] = [
  { accessorKey: "s_n", header: "S/N" },
  { accessorKey: "tracking_id", header: "Tracking Id" },
  { accessorKey: "customer_name", header: "Customer Name" },
  { accessorKey: "customer_address", header: "Customer Address" },
  { accessorKey: "fulfillment_status", header: "Fulfillment Status" },
  { accessorKey: "date_ordered", header: "Date Ordered" },
  {
    accessorKey: "order_line_items",
    header: "Order Line Items",
    cell: ({ row }) => {
      const orderLineItems = row.getValue("order_line_items");
      return <div>{orderLineItems as ReactNode}</div>;
    },
  },
];
