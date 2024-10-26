import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import OrderLineItems from "./orderLineItem";
import { Order } from "@/lib/type";
import { reduceString } from "@/lib/helpers";

export function DrawerComponent({ order }: { order: Order }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">View ({order.lineItems.length})</Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Order List items</DrawerTitle>
            <DrawerDescription>
              for Order {reduceString(order.id)}
            </DrawerDescription>
          </DrawerHeader>

          <OrderLineItems orderId={order.id} />

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
