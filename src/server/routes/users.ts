import prisma from "@/lib/prisma";
import { procedure, router } from "../trpc";

export const userRouter = router({
  getUsers: procedure.query(async () => {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (e) {
      throw e;
    }
  }),
});
