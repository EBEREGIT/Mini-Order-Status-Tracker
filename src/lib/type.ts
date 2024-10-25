export type Order = {
  id: string;
  userId: string;
  fulfillmentStatus: string;
  createdAt: string;
  user: User;
  lineItems: OrderLineItems[];
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

export type OrderLineItems = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  createdAt: string;
};
