import { AIDoctorAgents } from "@/shared/list";
import React, { useState } from "react";
import DoctorAgentCard, { doctorAgent } from "./DoctorAgentCard";

/**
 * DoctorsAgentList Component
 * Displays a grid of AI-powered doctor agent cards using data from AIDoctorAgents.
 */
function DoctorsAgentList({
  showDoctors,
  info,
}: {
  showDoctors: doctorAgent[] | any;
  info: string | undefined;
}) {
  const doctors = showDoctors?.length > 0 ? showDoctors : AIDoctorAgents;

  const isSuggested = showDoctors?.length > 0;
  return (
    <div className="mt-10">
      {/* 🧠 Section Title */}
      <h2 className="font-bold text-xl">
        {isSuggested
          ? "Suggested AI Doctors are here "
          : "AI Specialist Doctors Agent"}
      </h2>
      <div className="py-4 px-4">
        {isSuggested && info && (
          <>
            <p className="font-light text-sm italic ">
              <span className="font-bold normal">Could be </span>
              {info}
            </p>
          </>
        )}
      </div>

      {/* 🩺 Responsive grid layout for doctor cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-5">
        {doctors.map((doctor: doctorAgent, index: Number) => (
          <div key={doctor.id}>
            {/* 🧑‍⚕️ Render each doctor agent card */}
            <DoctorAgentCard doctorAgent={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsAgentList;
