import { Award } from "lucide-react";
import { useProfile } from "../../context/ProfileContext";

export function PointsBalanceCard() {
  const { profile } = useProfile();
  const goal = 5000;
  const star = "\u{2B50}";


  return (
    <div className="bg-[#F7F8FC] border shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all 
        rounded-2xl hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] 
        border-[#f3f4f6] overflow-hidden duration-200"
    >
      <div className="flex items-center gap-2 text-lg p-4 bg-[#eef2ff] font-semibold text-gray-700">
        <Award className="font-bold text-purple-500" />
        Points Balance
      </div>

      <div className="mt-6 flex items-center justify-between px-4">
        <span className="text-4xl font-bold text-[#9031fe]">
          {profile?.points ?? 0}
        </span>
        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
          {star}
        </div>
      </div>

      <div className="mt-4 px-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <h2>Progress to <span className="font-bold">$5 Gift Card</span> </h2>
          <span className="font-bold">{profile?.points ?? 0}/{goal}</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 rounded-full"
            style={{ width: `${(profile?.points / goal) * 100}%` }}
          ></div>
        </div>
        <p className="mt-3 py-3 text-xs text-gray-500">
          🚀 Just getting started — keep earning points!
        </p>
      </div>

    </div>
  );
}
