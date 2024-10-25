import { orderRouter } from "./routes/orders";
import { userRouter } from "./routes/users";
import { router } from "./trpc";

export const appRouter = router({
  user: userRouter,
  order: orderRouter
});

export type AppRouter = typeof appRouter;
