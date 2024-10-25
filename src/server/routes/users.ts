import prisma from "@/utils/prisma";
import { procedure, router } from "../trpc";

export const userRouter = router({
  getUsers: procedure.query(async () => {
    try {
      const users = await prisma.order.findMany({
        include: {
          lineItems: true,
        },
      });
      return users;
    } catch (e) {
      throw e;
    }
  }),
});
