import { Star } from "lucide-react";

export function ReferWinCard() {
  return (
    <div className="bg-[#F7F8FC] rounded-2xl shadow-xs overflow-hidden hover:-translate-y-1.5 hover:border-purple-500 hover:border hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-200">
     <div className="flex items-center w-full gap-2 text-sm font-medium text-gray-700 bg-white rounded-tl=2xl rounded-tr-2xl p-3">
        <div className="flex items-center gap-2 text-sm font-medium w-10 h-10 rounded-[10px]  justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
            <Star className=" text-purple-500" />
        </div>
        Refer and win 10,000 points!
      </div>

      <p className="mt-4 text-sm text-gray-600 p-3 font-bold">
        Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of
        <span className="font-semibold text-purple-600"> 10,000 points</span>.
        Friends must complete onboarding to qualify.
      </p>
    </div>
  );
}

