"use client";
import { trpc } from "@/server/client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Order, TablePropsTypes } from "@/lib/type";
import { useMemo, useState } from "react";
import PaginationComponent from "@/components/pagination";
import { AlertComponent } from "@/components/Alert";
import { reduceString } from "@/lib/helpers";
import moment from "moment";
import { DrawerComponent } from "@/components/Drawer";

export default function DataTableComponent() {
  const [page, setPage] = useState(1);
  const orders = trpc.order.getOrders.useQuery({ page });
  const ordersData = orders.data as Order[];

  const data = useMemo(
    () =>
      ordersData
        ? ordersData.map((order, index) => ({
            id: order.id,
            s_n: index + 1,
            tracking_id: reduceString(order.id),
            customer_name: order.user.name,
            customer_address: order.user.address,
            fulfillment_status: order.fulfillmentStatus,
            date_ordered: moment(order.createdAt).format("L"),
            order_line_items: (
              <DrawerComponent key={order.createdAt} order={order} />
            ),
          }))
        : [],
    [ordersData]
  );

  return (
    <main>
      {/* heading */}
      <h2 className="text-center text-2xl py-5 font-bold sticky bg-white z-[1]">
        Mini Order Status Tracker
      </h2>

      <section className="w-[90%] m-auto border rounded-lg">
        {/* orders */}
        {orders.isLoading ? (
          <AlertComponent label="Orders" />
        ) : (
          <DataTable columns={columns} data={data as TablePropsTypes[]} />
        )}

        {/* pagination */}
        <PaginationComponent setter={setPage} page={page} />
      </section>
    </main>
  );
}
