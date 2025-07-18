import { UserDetail } from "@/app/provider";
import { createContext } from "react";

export const UserDetailContext = createContext<UserDetail | undefined>(
  undefined
);
