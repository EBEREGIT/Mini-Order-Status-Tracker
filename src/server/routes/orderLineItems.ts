import prisma from "@/lib/prisma";
import { procedure, router } from "../trpc";
import { z } from "zod";

const ROWS_PER_PAGE = Number(process.env.ROWS_PER_PAGE as unknown as number);

export const orderLineItemRouter = router({
  getOrderLineItems: procedure
    .input(
      z.object({
        page: z.number(),
        orderId: z.string(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;

      try {
        const orderLineItems = await prisma.orderLineItem.findMany({
          where: {
            orderId: input.orderId,
          },
          include: {
            product: true,
          },
          take: ROWS_PER_PAGE,
          skip: (input.page - 1) * ROWS_PER_PAGE,
          orderBy: {
            createdAt: "desc",
          },
        });
        return orderLineItems;
      } catch (e) {
        throw e;
      }
    }),
});
