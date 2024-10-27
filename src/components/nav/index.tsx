"use client";
import { protest_guerrilla } from "@/app/fonts";
import Leave from "./logout";
import { useSession } from "next-auth/react";

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <nav className="bg-slate-300 flex justify-between place-items-center py-3 px-2">
      <h3 className={`${protest_guerrilla.className} text-2xl`}>Cybership</h3>

      <section className="flex justify-start gap-2 place-items-center">
        <p>{session?.user?.email}</p>
        <Leave />
      </section>
    </nav>
  );
}
