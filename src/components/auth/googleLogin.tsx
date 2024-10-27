"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function GoogleLogin() {
  const [feedback, setFeedback] = useState("");

  const login = async () => {
    setFeedback("Authenticating");
    try {
      await signIn("google", { redirectTo: "/orders" });
    } catch (error) {
      setFeedback("Failed");
      throw error;
    }
  };
  return (
    <>
      <p>{feedback}</p>
      <Button
        onClick={() => {
          login();
        }}
        className="w-full my-5"
      >
        Sign in With Google
      </Button>
    </>
  );
}
