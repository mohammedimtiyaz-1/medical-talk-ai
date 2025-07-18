import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className=" shadow-md rounded-lg gap-1 p-2 w-full xs:1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex  justify-center flex-col items-center">
      <Image
        src={doctor.image}
        alt={doctor.specialist}
        width={150}
        height={150}
        className="w-fulll h-[150px] rounded-full object-cover mb-2"
      />
      <h6 className="font-semibold text-gray-900 dark:text-white">
        {doctor.specialist}
      </h6>
      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 text-center">
        {doctor.description}
      </p>
      <Button>Lets Consult</Button>
    </div>
  );
}
export type Doctor = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
  voiceId: string;
  subscriptionRequired: boolean;
};
