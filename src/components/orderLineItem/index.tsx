"use client";

import { trpc } from "@/server/client";
import React, { useState } from "react";
import { LineItemWithProductDetails } from "@/lib/type";
import Pagination from "../pagination";
import { ScrollArea } from "../ui/scroll-area";
import { AlertComponent } from "../Alert";
import LineItems from "./lineItems";

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
        {orders.isLoading ? (
          <AlertComponent label="Order Line Items" />
        ) : (
          <LineItems data={data} />
        )}
      </ScrollArea>

      {/* pagination */}
      <section className="mx-5">
        <Pagination page={page} setter={setPage} />
      </section>
    </main>
  );
}
