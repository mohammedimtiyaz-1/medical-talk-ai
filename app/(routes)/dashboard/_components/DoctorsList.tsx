import doctorsList from "../../../../data/doctors";
import DoctorCard, { Doctor } from "./DoctorCard";
export default function DoctorsList() {
  return (
    <div className=" border-black border-2 p-1 sm:p-2 md:p-4">
      <h2 className="font-bold flex items-center justify-center">
        AI Specialist Doctors
      </h2>
      <div className="flex flex-wrap gap-2 sm:gap-4  justify-center">
        {doctorsList.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
