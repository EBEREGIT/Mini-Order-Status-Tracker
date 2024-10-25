import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { reduceString } from "@/lib/helpers";
import { Order } from "@/lib/type";
import moment from "moment";

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
          ? data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{reduceString(item.id)}</TableCell>
                <TableCell>{item.user.name}</TableCell>
                <TableCell>{item.user.address}</TableCell>
                <TableCell>{item.fulfillmentStatus}</TableCell>
                <TableCell>{moment(item.createdAt).format("L")}</TableCell>
                <TableCell>{item.lineItems.length}</TableCell>
              </TableRow>
            ))
          : ""}
      </TableBody>
    </Table>
  );
}
