"use client";
import React, { useState } from "react";
import HistoryList from "./_components/HistoryList";
import { Button } from "@/components/ui/button";
import DoctorsAgentList from "./_components/DoctorsAgentList";
import AddNewSessionDialog from "./_components/AddNewSessionDialog";
import { doctorAgent } from "./_components/DoctorAgentCard";

export type doctorInfo = {
  additionalInfo: string;
  suggestedDoctors: doctorAgent[];
};
function Dashboard() {
  const [doctorsInfo, setDoctorsInfo] = useState<doctorInfo>();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">My Dashboard</h2>
        <AddNewSessionDialog setSuggestedDoctors={setDoctorsInfo} />
      </div>
      <DoctorsAgentList
        showDoctors={doctorsInfo?.suggestedDoctors}
        info={doctorsInfo?.additionalInfo}
      />
    </div>
  );
}

export default Dashboard;
