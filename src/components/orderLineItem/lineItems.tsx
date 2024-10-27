import { LineItemWithProductDetails } from "@/lib/type";
import Item from "./item";

export default function LineItems({
  data,
}: {
  data: LineItemWithProductDetails[];
}) {
  return (
    <section className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-5">
      {data && data?.length
        ? data.map((item: LineItemWithProductDetails) => (
            <Item lineItem={item} key={item.id} />
          ))
        : "No Order Line Items Found"}
    </section>
  );
}
