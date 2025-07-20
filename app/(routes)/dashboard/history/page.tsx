import React from "react";
import HistoryList from "../_components/HistoryList";
import axios from "axios";
import { SessionDetail } from "../medical-agent/[sessionId]/page";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/config/db";
import { SessionChatTable } from "@/config/schema";
import { desc, eq } from "drizzle-orm";

async function GetHistoryList() {
  const sessionId = "all";
  const user = await currentUser();
  let result;
  if (sessionId == "all") {
    result = await db
      .select()
      .from(SessionChatTable)
      //@ts-ignore
      .where(
        eq(SessionChatTable.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(SessionChatTable.id));
  } else {
    const result = await db
      .select()
      .from(SessionChatTable)
      //@ts-ignore
      .where(eq(SessionChatTable.sessionId, sessionId));
  }
  return result;
}

async function History() {
  const result = await GetHistoryList();
  const historyList: SessionDetail[] = result;
  return <HistoryList historyList={historyList} />;
}

export default History;
