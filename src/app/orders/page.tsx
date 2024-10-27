import Navigation from "@/components/nav";
import Orders from "./orders";
import { auth } from "@/configurations/auth";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
  const session = await auth();
  if (!session?.user) return redirect("/");

  return (
    <main>
      <Navigation />
      <Orders />
    </main>
  );
}
