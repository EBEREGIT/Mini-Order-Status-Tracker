import { ReactNode } from "react";

export type Order = {
  id: string;
  userId: string;
  fulfillmentStatus: string;
  createdAt: string;
  user: User;
  lineItems: LineItems[];
};

export type User = {
  id: string;
  name?: string;
  email: string;
  address: string;
  emailVerified?: null;
  image?: null;
  createdAt: string;
  updatedAt: string;
};

export type LineItems = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  createdAt: string;
};

export type LineItemWithProductDetails = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  createdAt: string;
  product: Product;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  createdAt: string;
};

export type TablePropsTypes = {
  id: string;
  s_n: number;
  tracking_id: string;
  customer_name: string;
  customer_address: string;
  fulfillment_status: string;
  date_ordered: string;
  order_line_items: ReactNode;
};
