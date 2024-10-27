"use client";
import React from "react";
import LoginForm from "./form";
import GoogleLogin from "./googleLogin";
import { Separator } from "@/components/ui/separator";

export default function Auth() {
  return (
    <div className="h-[100vh] flex justify-center place-items-center">
      <main className="w-[50vh]">
        <LoginForm />
        <Separator />
        <GoogleLogin />
      </main>
    </div>
  );
}
