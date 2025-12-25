import { Award } from "lucide-react";

export function PointsBalanceCard() {
  const points = 15;
  const goal = 5000;

  return (
    <div className="bg-[#F7F8FC] border p-5 shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all 
        rounded-2xl hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] 
        border-[#f3f4f6] overflow-hidden duration-200"
    >
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
        <Award className="font-bold text-purple-500" />
        Points Balance
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-4xl font-bold text-[#9031fe]">
          {points}
        </span>
        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
          ⭐
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Progress to $5 Gift Card</span>
          <span>{points}/{goal}</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 rounded-full"
            style={{ width: `${(points / goal) * 100}%` }}
          />
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        🚀 Just getting started — keep earning points!
      </p>
    </div>
  );
}
