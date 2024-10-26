import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineItemWithProductDetails } from "@/lib/type";

export default function Item({
  lineItem,
}: {
  lineItem: LineItemWithProductDetails;
}) {
  return (
    <Card key={lineItem.id} className="">
      <CardHeader>
        <CardTitle>{lineItem.product.name}</CardTitle>
        <CardDescription>{lineItem.product.description}</CardDescription>
      </CardHeader>
      <CardContent>₦ {lineItem.product.price} K</CardContent>
    </Card>
  );
}
