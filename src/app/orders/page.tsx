import Navigation from "@/components/nav";
import { auth } from "@/configurations/auth";
import { redirect } from "next/navigation";
import DataTableComponent from "./DataTableComponent";

export default async function OrdersPage() {
  const session = await auth();
  if (!session?.user) return redirect("/");

  return (
    <main>
      <Navigation />
      <DataTableComponent />
    </main>
  );
}
