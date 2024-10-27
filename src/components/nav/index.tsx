"use client"
import Leave from "./logout";

export default function Navigation() {
  return (
    <nav className="bg-slate-300 flex justify-between place-items-center py-3 px-2">
      <h3>Cybership</h3>
      <Leave />
    </nav>
  );
}
