"use client"

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/lib/type";
import Body from "./body";
import { ScrollArea } from "../../components/ui/scroll-area";

export default function All({ data }: { data: Order[] }) {
  const headings: string[] = [
    "S/N",
    "Tracking Id",
    "Customer Name",
    "Customer Address",
    "Fulfillment Status",
    "Date Ordered",
    "Order Line Items",
  ];

  return (
    <ScrollArea className="h-[70vh] border-b">
      <Table>
        <TableHeader className="sticky">
          <TableRow>
            {headings.map((label) => (
              <TableHead key={label}>{label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data && data.length
            ? data.map((item: Order, index) => (
                <TableRow key={item.id}>
                  <Body order={item} index={index} />
                </TableRow>
              ))
            : "No order found"}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
