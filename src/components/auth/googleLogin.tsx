"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";

export default function GoogleLogin() {
  const login = async () => {
    try {
      await signIn("google", { redirectTo: "/orders" });
    } catch (error) {
      throw error;
    }
  };
  return (
    <Button
      onClick={() => {
        login();
      }}
      className="w-full my-5"
    >
      Sign in With Google
    </Button>
  );
}
