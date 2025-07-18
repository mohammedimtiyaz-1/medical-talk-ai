"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function HistoryList() {
  const [historyList, setHistoryList] = useState<string[]>([]);

  if (historyList.length === 0) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <h2 className="text-2xl font-bold">No recent consultation</h2>
        <Image
          src="/medical-assistance.png"
          alt="medical"
          width={200}
          height={200}
        />
        <h2>Lets talk right now. Doctor is waiting..!</h2>
        <Button>Lets start a consultation</Button>
      </div>
    );
  }
  return <div className="flex flex-col gap-4">Historty loading</div>;
}
