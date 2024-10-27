"use client"
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertComponent({ label }: { label: string }) {
  return (
    <Alert variant="default">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Loading...</AlertTitle>
      <AlertDescription>Fetching {label}</AlertDescription>
    </Alert>
  );
}
