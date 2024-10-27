"use client"

import { trpc } from "@/server/client";
import { Order } from "@/lib/type";
import Pagination from "../../components/pagination";
import { useState } from "react";
import { AlertComponent } from "../../components/Alert";
import All from "./All";

export default function Orders() {
  const [page, setPage] = useState(1);
  const orders = trpc.order.getOrders.useQuery({ page });

  return (
    <main>
      {/* heading */}
      <h2 className="text-center text-3xl py-5 font-bold sticky bg-white z-[1]">
        Customers Orders
      </h2>

      <section className="w-[90%] m-auto border rounded-lg">
        {/* orders */}
        {orders.isLoading ? (
          <AlertComponent label="Orders" />
        ) : (
          <All data={orders.data as Order[]} />
        )}

        {/* pagination */}
        <Pagination setter={setPage} page={page} />
      </section>
    </main>
  );
}
