"use client";

import { trpc } from "@/server/client";
import All from "./orders";
import { Order } from "@/lib/type";
import Pagination from "../pagination";
import { useState } from "react";

export default function Orders() {
  const [page, setPage] = useState(1);
  const orders = trpc.order.getOrders.useQuery({ page });

  return (
    <section className="w-[90%] m-auto border rounded-lg">
      {orders.isLoading ? "Loading..." : <All data={orders.data as Order[]} />}
      <Pagination setter={setPage} page={page} />
    </section>
  );
}
