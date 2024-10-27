import { Input } from "@/components/ui/input";
import React, { Dispatch, SetStateAction } from "react";

export default function Search({
  globalFilter,
  setGlobalFilter,
}: {
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Input
      value={globalFilter ?? ""}
      onChange={(e) => setGlobalFilter(e.target.value)}
      placeholder="Search..."
      className="w-full"
    />
  );
}
