"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";
import DoctorAgentCard, { doctorAgent } from "./DoctorAgentCard";
import SuggestedDoctorCard from "./SuggestedDoctorCard";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { SessionDetail } from "../medical-agent/[sessionId]/page";

function AddNewSessionDialog({
  setSuggestedDoctors,
}: {
  setSuggestedDoctors: Function;
}) {
  // 🧠 Local state management
  const [note, setNote] = useState<string>(); // stores user symptom input
  const [loading, setLoading] = useState(false); // tracks loading state
  const [open, setOpen] = useState(false);

  const [historyList, setHistoryList] = useState<SessionDetail[]>([]); // stores past session list

  const router = useRouter();
  const { has } = useAuth();

  // 🧾 Fetch session history when dialog mounts
  useEffect(() => {
    GetHistoryList();
  }, []);

  // 📥 Get all previous session records
  const GetHistoryList = async () => {
    const result = await axios.get("/api/session-chat?sessionId=all");

    setHistoryList(result.data);
  };

  // 🧠 Handles the "Next" button click — suggests doctors based on user input
  const OnClickNext = async () => {
    setLoading(true);
    const result = await axios.post("/api/suggest-doctors", {
      notes: note,
    });

    setSuggestedDoctors(result.data);
    setOpen(false);
    setLoading(false);
  };

  return (
    <Dialog open={open}>
      {/* 🔘 Open Dialog Button */}
      <DialogTrigger onClick={() => setOpen(true)}>
        <Button className="mt-3">Write Your Symptoms</Button>
      </DialogTrigger>

      {/* 🗂️ Dialog Content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription asChild>
            {/* Step 1: Enter Symptoms */}

            <div>
              <h2>Add Symptoms or Any Other Details</h2>
              <Textarea
                placeholder="Add Detail here..."
                className="h-[200px] mt-1"
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>

        {/* ✅ Dialog Footer with Buttons */}
        <DialogFooter>
          {/* Cancel Button */}
          <DialogClose>
            <Button variant={"outline"} onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogClose>

          {/* Next or Start Button depending on the step */}

          <Button disabled={!note || loading} onClick={() => OnClickNext()}>
            Next{" "}
            {loading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewSessionDialog;
