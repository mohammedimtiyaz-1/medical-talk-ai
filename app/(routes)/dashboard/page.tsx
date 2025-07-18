import { Button } from "@/components/ui/button";
import HistoryList from "./_components/HistoryList";
import DoctorsList from "./_components/DoctorsList";

export default function Workspace() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">My Dashboard</h2>
        <Button>+ Consult with Doctor</Button>
      </div>
      <HistoryList />
      <DoctorsList />
    </div>
  );
}
