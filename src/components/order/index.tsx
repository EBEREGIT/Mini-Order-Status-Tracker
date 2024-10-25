"use client";

import { trpc } from "@/server/client";
import React from "react";

export default function Orders() {
  const orders = trpc.order.getOrders.useQuery({ page: 1 });

  return <div>{JSON.stringify(orders.data)}</div>;
}
