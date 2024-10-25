"use client";

import { trpc } from "@/server/client";
import React from "react";

export default function Users() {
  const users = trpc.user.getUsers.useQuery();

  return <div>{JSON.stringify(users.data)}</div>;
}
