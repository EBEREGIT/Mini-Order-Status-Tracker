"use client"

import { signOut } from "next-auth/react"
import React from "react";
import { Button } from "../ui/button";

export default function Leave() {
  const logout = async () => {
    try {
      await signOut({ redirectTo: "/" });
    } catch (error) {
      throw error;
    }
  };
  return <Button onClick={() => {logout()}}>Logout</Button>;
}
