import prisma from "@/lib/prisma";
import { procedure, router } from "../trpc";
import { z } from "zod";

const ROWS_PER_PAGE = Number(process.env.ROWS_PER_PAGE as unknown as number);

export const orderRouter = router({
  getOrders: procedure
    .input(
      z.object({
        page: z.number(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;

      try {
        const orders = await prisma.order.findMany({
          include: {
            user: true,
            lineItems: true,
          },
          take: ROWS_PER_PAGE,
          skip: (input.page - 1) * ROWS_PER_PAGE,
          orderBy: {
            createdAt: "desc",
          },
        });
        return orders;
      } catch (e) {
        throw e;
      }
    }),
});
