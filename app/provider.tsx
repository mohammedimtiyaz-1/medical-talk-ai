"use client";

import { UserDetailContext } from "@/context/UserDetailContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

export type UserDetail = {
  name: string;
  email: string;
  credits: number;
};

export default function Provider({ children }: { children: React.ReactNode }) {
  const user = useUser();
  const [userDetail, setUserDetail] = useState<UserDetail | undefined>();

  useEffect(() => {
    user && createNewUser();
  }, [user]);
  const createNewUser = async () => {
    // Logic to create a new user

    const result = await fetch("/api/users", { method: "POST" });
    const res = await result.json();
    if (!user) {
      setUserDetail({
        name: res.name,
        email: res.email,
        credits: res.credits,
      });
    }
    console.log("success to fetch", res);
  };

  return (
    <div>
      <UserDetailContext.Provider value={userDetail}>
        {children}
      </UserDetailContext.Provider>
      /
    </div>
  );
}
