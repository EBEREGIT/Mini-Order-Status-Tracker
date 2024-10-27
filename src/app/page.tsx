import Auth from "@/components/auth";
import { auth } from "@/configurations/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) return redirect("/orders");

  return (
    <div className="w-screen">
      <Auth />
    </div>
  );
}
