import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const mernuOptions = [
  { id: "1", name: "Home", path: "/home" },
  { id: "2", name: "History", path: "/history" },
  { id: "3", name: "Price", path: "/price" },
  { id: "4", name: "Profile", path: "/profile" },
];
export default function AppHeader() {
  return (
    <div className="bg-white shadow flex items-center justify-between p-4 dark:bg-gray-800">
      <Image src="/logo.svg" alt="logo" width={200} height={100} />
      <div className="hidden sm:flex space-x-4 text-gray-700 dark:text-gray-300">
        {mernuOptions.map((op, i) => (
          <h2 key={op.id} className="hover:font-bold pointer:">
            {op.name}
          </h2>
        ))}
      </div>
      <UserButton />
    </div>
  );
}
