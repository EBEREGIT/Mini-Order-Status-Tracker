"use client";

import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function Leave() {
  const [feedback, setFeedback] = useState("");

  const logout = async () => {
    setFeedback("Leaving");

    try {
      await signOut({ redirectTo: "/" });
    } catch (error) {
      setFeedback("Failed");
      throw error;
    } finally {
      setFeedback("");
    }
  };
  return (
    <Button
      onClick={() => {
        logout();
      }}
    >
      {feedback ? feedback : "Logout"}
    </Button>
  );
}
