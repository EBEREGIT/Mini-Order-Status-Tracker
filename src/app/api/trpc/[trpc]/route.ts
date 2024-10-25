import { appRouter } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    req,
    createContext: () => ({}),
    endpoint: "/api/trpc",
    router: appRouter,
  });

export { handler as GET, handler as POST };
