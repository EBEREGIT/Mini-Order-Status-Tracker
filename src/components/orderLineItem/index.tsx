"use client";

import { trpc } from "@/server/client";
import React from "react";
import Item from "./item";
import { LineItemWithProductDetails } from "@/lib/type";

export default function OrderLineItems({ orderId }: { orderId: string }) {
  const orders = trpc.orderLineItem.getOrderLineItems.useQuery({
    page: 1,
    orderId,
  });

  const data = orders?.data as LineItemWithProductDetails[];

  return (
    <section className="w-full grid grid-cols-4 gap-5">
      {orders && data?.length
        ? data.map((item: LineItemWithProductDetails) => (
            <Item lineItem={item} key={item.id} />
          ))
        : ""}
    </section>
  );
}
