import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/lib/type";
import Body from "./body";

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
    <Table>
      <TableHeader>
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
          : ""}
      </TableBody>
    </Table>
  );
}
