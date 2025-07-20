"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function medicalAgent() {
  const { sessionId } = useParams();
  const [sessionDetail, setSessionDetail] = useState(null);

  // const router = useRouter();

  useEffect(() => {
    if (sessionId) {
      getSessionDetails();
    }
  }, [sessionId]);

  // Fetch session detail data from backend API
  const getSessionDetails = async () => {
    const result = await axios.get(`/api/session-chat?sessionId=${sessionId}`);
    // setSessionDetail(result.data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Medical Agent Session: {sessionId}
      </h1>
    </div>
  );
}
