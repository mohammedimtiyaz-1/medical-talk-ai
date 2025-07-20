import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddNewSessionDialog from "./AddNewSessionDialog";
import axios from "axios";
import { SessionDetail } from "../medical-agent/[sessionId]/page";
import HistoryTable from "./HistoryTable";

/**
 * HistoryList Component
 *
 * Displays the user's previous consultation sessions.
 * - If no sessions exist: shows a placeholder UI and CTA to start a new consultation.
 * - If sessions exist: displays them in a table using <HistoryTable />.
 */
function HistoryList({ historyList }: { historyList: SessionDetail[] }) {
  // 📥 Fetch all consultation sessions from the backend

  return (
    <div className="mt-10">
      {/* 📦 If no history, show empty state UI */}
      {historyList.length == 0 ? (
        <div className="flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl border-2">
          <Image
            src={"/medical-assistance.png"}
            alt="empty"
            width={150}
            height={150}
          />
          <h2 className="font-bold text-xl mt-2">No Recent Consultations</h2>
          <p>It looks like you haven't consulted with any doctors yet.</p>

          {/* ➕ Trigger to start a new consultation */}
          <AddNewSessionDialog setSuggestedDoctors={() => {}} />
        </div>
      ) : (
        // 📊 Show consultation history table
        <div>
          <HistoryTable historyList={historyList} />
        </div>
      )}
    </div>
  );
}

export default HistoryList;
