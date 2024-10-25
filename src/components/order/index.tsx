"use client";

import { trpc } from "@/server/client";
import React from "react";
import All from "./orders";
import { Order } from "@/lib/type";

export default function Orders() {
  const orders = trpc.order.getOrders.useQuery({ page: 1 });

  return <All data={orders.data as Order[]} />;
}
