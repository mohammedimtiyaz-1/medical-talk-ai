"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const user = useUser();
  useEffect(() => {
    user && createNewUser();
  }, [user]);
  const createNewUser = async () => {
    // Logic to create a new user

    const result = await fetch("/api/users", { method: "POST" });
    const res = await result.json();

    console.log(res);
  };

  return <div>{children}</div>;
}
