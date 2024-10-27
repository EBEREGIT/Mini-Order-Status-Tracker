import Auth from "@/components/auth";
import { auth } from "@/configurations/auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session: Session | null = await auth();
  if (session?.user) return redirect("/orders");

  return (
    <div className="w-screen">
      <Auth />
    </div>
  );
}
