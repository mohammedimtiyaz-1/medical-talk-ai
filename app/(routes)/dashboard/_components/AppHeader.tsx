"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const menuOptions = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 3,
    name: "History",
    path: "/dashboard/history",
  },
  {
    id: 4,
    name: "Pricing",
    path: "/dashboard/billing",
  },
];

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="bg-neutral-100 flex w-full items-center justify-between  border-b border-neutral-200 px-1 md:px-2   shadow px-6 md:px-12  lg:px-16 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="logo" width={40} height={40} />
      </div>
      <div className="hidden md:flex gap-12 items-center">
        {menuOptions.map((option, index) => (
          <Link key={index} href={option.path}>
            <h2 className={`hover:font-bold cursor-pointer transition-all`}>
              {option.name}
            </h2>
          </Link>
        ))}
      </div>
      {!user ? (
        <Link href={"/dashboard"}>
          <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Get Started
          </button>
        </Link>
      ) : (
        <UserButton />
      )}
    </nav>
  );
};
export default Navbar;
