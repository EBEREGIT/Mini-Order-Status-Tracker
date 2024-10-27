import React from "react";
import { TableCell } from "../../components/ui/table";
import { reduceString } from "@/lib/helpers";
import { Order } from "@/lib/type";
import moment from "moment";
import { DrawerComponent } from "../../components/Drawer";

export default function Body({
  order,
  index,
}: {
  order: Order;
  index: number;
}) {
  const data = [
    index + 1,
    reduceString(order.id),
    order.user.name,
    order.user.address,
    order.fulfillmentStatus,
    moment(order.createdAt).format("L"),
    <DrawerComponent key={order.createdAt} order={order} />,
  ];
  return (
    <>
      {data.map((item) => (
        <TableCell key={item?.toString()}>{item}</TableCell>
      ))}
    </>
  );
}
