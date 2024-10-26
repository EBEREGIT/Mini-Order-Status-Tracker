"use client";

import { trpc } from "@/server/client";
import React, { useState } from "react";
import Item from "./item";
import { LineItemWithProductDetails } from "@/lib/type";
import Pagination from "../pagination";
import { ScrollArea } from "../ui/scroll-area";

export default function OrderLineItems({ orderId }: { orderId: string }) {
  const [page, setPage] = useState(1);
  const orders = trpc.orderLineItem.getOrderLineItems.useQuery({
    page,
    orderId,
  });

  const data = orders?.data as LineItemWithProductDetails[];

  return (
    <main>
      {/* order line items */}
      <ScrollArea className="mx-auto w-full p-5 h-96">
        <section className="w-full grid grid-cols-4 gap-5">
          {orders && data?.length
            ? data.map((item: LineItemWithProductDetails) => (
                <Item lineItem={item} key={item.id} />
              ))
            : "No Order Line Items Found"}
        </section>
      </ScrollArea>

      {/* pagination */}
      <section className="mx-5">
        <Pagination page={page} setter={setPage} />
      </section>
    </main>
  );
}
